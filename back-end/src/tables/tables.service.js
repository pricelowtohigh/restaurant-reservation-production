const knex = require("../db/connection");

// Data query services for 'tables' resources //

function createTable(newTable) {
  return knex("tables")
    .insert(newTable)
    .returning("*")
    .then((createdRecord) => createdRecord[0]);
}

function readTable(tableId) {
  return knex("tables").select("*").where({ table_id: tableId }).first();
}

async function seatTable(tableId, reservationId) {
  try {
    const trx = await knex.transaction();

    return trx("tables")
      .where({ table_id: tableId })
      .update({ reservation_id: reservationId })
      .then(function () {
        return trx("reservations")
          .where({ reservation_id: reservationId })
          .update({ status: "seated" });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  } catch (error) {
    return error;
  }
}

async function unseatTable(tableId, reservationId) {
  try {
    const trx = await knex.transaction();

    return knex("tables")
      .select("*")
      .where({ table_id: tableId })
      .update({ reservation_id: null })
      .then(function () {
        return trx("reservations")
          .where({ reservation_id: reservationId })
          .update({ status: "finished" });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  } catch (error) {
    return error;
  }
}

function listTables() {
  return knex("tables").select("*").orderBy("table_name");
}

// Exports //

module.exports = {
  createTable,
  readTable,
  seatTable,
  unseatTable,
  listTables,
};