const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dbSmartCity',
  password: 'human',
  port: 5432,
})

const getLibraries = (request, response) => {
    pool.query('SELECT * FROM info_library ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}  ///Library Id ye göre listele

const getLibraryId = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM tbl_library WHERE "LibraryId" = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getMuseums = (request, response) => {
    pool.query('SELECT * FROM info_museum ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getMuseumId = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM tbl_museum WHERE "MuseumId" = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getParks = (request, response) => {
    pool.query('SELECT * FROM info_parking ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getParkId = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM tbl_parking WHERE "ParkingId" = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createLibrary = (request, response) => {
    const { BookCount, common_fk, Name} = request.body
  
    pool.query(
        'INSERT INTO tbl_library("BookCount", "common_fk", "Name") VALUES ($1, $2, $3)',
        [BookCount, common_fk,Name], (error, results) => {
      if (error) {
        throw error
      }
      //response.status(201).send(`Vehicle added with ID: ${result.insertId}`)
      response.status(201).send(`Library added!!`)
    })
}

const createMuseum = (request, response) => {
    const { Name, Price, common_fk} = request.body
  
    pool.query(
        'INSERT INTO tbl_museum("Name", "Price", "common_fk") VALUES ($1, $2, $3)',
        [Name, Price,common_fk], (error, results) => {
      if (error) {
        throw error
      }
      //response.status(201).send(`Vehicle added with ID: ${result.insertId}`)
      response.status(201).send(`Museum added!!`)
    })
}

const createPark = (request, response) => {
    const { Name, Price, common_fk} = request.body
  
    pool.query(
        'INSERT INTO tbl_parking("Name", "Price", "common_fk") VALUES ($1, $2, $3)',
        [Name, Price,common_fk], (error, results) => {
      if (error) {
        throw error
      }
      //response.status(201).send(`Vehicle added with ID: ${result.insertId}`)
      response.status(201).send(`Parking added!!`)
    })
}

const updateLibrary = (request, response) => {
    const id = parseInt(request.params.id)
    const { BookCount } = request.body
  
    pool.query(
      'UPDATE tbl_library SET "BookCount" = $1 WHERE "LibraryId" = $2',
      [ BookCount, id ],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Library modified with ID: ${id}`)
      }
    )
}

const updateMuseum = (request, response) => {
    const id = parseInt(request.params.id)
    const { Price } = request.body
  
    pool.query(
      'UPDATE tbl_museum SET "Price" = $1 WHERE "MuseumId" = $2',
      [ Price, id ],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Museum modified with ID: ${id}`)
      }
    )
}

const updatePark = (request, response) => {
    const id = parseInt(request.params.id)
    const { Price } = request.body
  
    pool.query(
      'UPDATE tbl_parking SET "Price" = $1 WHERE "ParkingId" = $2',
      [ Price, id ],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Museum modified with ID: ${id}`)
      }
    )
}

const deleteLibrary = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM tbl_library WHERE "LibraryId" = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Library deleted with ID: ${id}`)
    })
}

const deleteMuseum = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM tbl_museum WHERE "MuseumId" = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Museum deleted with ID: ${id}`)
    })
}

const deletePark = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM tbl_parking WHERE "ParkingId" = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Park deleted with ID: ${id}`)
    })
}

  module.exports = {
    getLibraries,
    getMuseums,
    getParks,
    getLibraryId,
    getMuseumId,
    getParkId,
    createLibrary,
    createMuseum,
    createPark,
    updateLibrary,
    updateMuseum,
    updatePark,
    deleteLibrary,
    deleteMuseum,
    deletePark,
  }