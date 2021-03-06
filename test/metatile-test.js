'use strict'

const assert = require('assert')
const { describe, it } = require('mocha')
const calculateMetatile = require('../lib/renderer/metatile')

const FULL = 20037508.342789244
const HALF = 0
const QUAD = 10018754.171394622
const QUADX = 10018754.17139462

describe('metatile', function () {
  it('metatile calculation at z=0', function () {
    const tile = {
      width: 256,
      height: 256,
      tiles: [ [0, 0, 0] ],
      bbox: [ -FULL, -FULL, FULL, FULL ],
      x: 0,
      y: 0
    }
    assert.deepStrictEqual(calculateMetatile({ z: 0, x: 0, y: 0, metatile: 1, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 0, x: 0, y: 0, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 0, x: 0, y: 0, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 0, x: 0, y: 0, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 0, x: 0, y: 0, metatile: 13, tileSize: 256 }), tile)
  })

  it('metatile calculation at z=1', function () {
    // metatile: 1
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 0, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [1, 0, 0] ],
      bbox: [ -FULL, HALF, HALF, FULL ],
      x: 0,
      y: 0
    })
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 1, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [1, 0, 1] ],
      bbox: [ -FULL, -FULL, HALF, -HALF ],
      x: 0,
      y: 1
    })
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 0, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [1, 1, 0] ],
      bbox: [ HALF, HALF, FULL, FULL ],
      x: 1,
      y: 0
    })
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 1, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [1, 1, 1] ],
      bbox: [ HALF, -FULL, FULL, -HALF ],
      x: 1,
      y: 1
    })

    const tile = {
      width: 512,
      height: 512,
      tiles: [ [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1] ],
      bbox: [ -FULL, -FULL, FULL, FULL ],
      x: 0,
      y: 0
    }

    // metatile: 2
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 0, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 1, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 0, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 1, metatile: 2, tileSize: 256 }), tile)

    // metatile: 3
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 0, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 1, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 0, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 1, metatile: 3, tileSize: 256 }), tile)

    // metatile: 4
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 0, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 1, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 0, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 1, metatile: 4, tileSize: 256 }), tile)

    // metatile: 13
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 0, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 0, y: 1, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 0, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 1, x: 1, y: 1, metatile: 13, tileSize: 256 }), tile)
  })

  it('metatile calculation at z=2', function () {
    // metatile: 1
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 0, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 0, 0] ],
      bbox: [ -FULL, QUAD, -QUAD, FULL ],
      x: 0,
      y: 0
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 1, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 0, 1] ],
      bbox: [ -FULL, HALF, -QUAD, QUAD ],
      x: 0,
      y: 1
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 2, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 0, 2] ],
      bbox: [ -FULL, -QUADX, -QUAD, -HALF ],
      x: 0,
      y: 2
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 3, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 0, 3] ],
      bbox: [ -FULL, -FULL, -QUAD, -QUADX ],
      x: 0,
      y: 3
    })

    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 0, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 1, 0] ],
      bbox: [ -QUAD, QUAD, HALF, FULL ],
      x: 1,
      y: 0
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 1, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 1, 1] ],
      bbox: [ -QUAD, HALF, HALF, QUAD ],
      x: 1,
      y: 1
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 2, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 1, 2] ],
      bbox: [ -QUAD, -QUADX, HALF, -HALF ],
      x: 1,
      y: 2
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 3, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 1, 3] ],
      bbox: [ -QUAD, -FULL, HALF, -QUADX ],
      x: 1,
      y: 3
    })

    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 0, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 2, 0] ],
      bbox: [ HALF, QUAD, QUADX, FULL ],
      x: 2,
      y: 0
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 1, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 2, 1] ],
      bbox: [ HALF, HALF, QUADX, QUAD ],
      x: 2,
      y: 1
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 2, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 2, 2] ],
      bbox: [ HALF, -QUADX, QUADX, -HALF ],
      x: 2,
      y: 2
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 3, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 2, 3] ],
      bbox: [ HALF, -FULL, QUADX, -QUADX ],
      x: 2,
      y: 3
    })

    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 0, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 3, 0] ],
      bbox: [ QUADX, QUAD, FULL, FULL ],
      x: 3,
      y: 0
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 1, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 3, 1] ],
      bbox: [ QUADX, HALF, FULL, QUAD ],
      x: 3,
      y: 1
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 2, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 3, 2] ],
      bbox: [ QUADX, -QUADX, FULL, -HALF ],
      x: 3,
      y: 2
    })
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 3, metatile: 1, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 3, 3] ],
      bbox: [ QUADX, -FULL, FULL, -QUADX ],
      x: 3,
      y: 3
    })
  })

  it('metatile = 2', function () {
    let tile = {
      width: 512,
      height: 512,
      tiles: [ [2, 0, 0], [2, 0, 1], [2, 1, 0], [2, 1, 1] ],
      bbox: [ -FULL, HALF, HALF, FULL ],
      x: 0,
      y: 0
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 0, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 1, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 0, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 1, metatile: 2, tileSize: 256 }), tile)

    tile = {
      width: 512,
      height: 512,
      tiles: [ [2, 2, 0], [2, 2, 1], [2, 3, 0], [2, 3, 1] ],
      bbox: [ HALF, HALF, FULL, FULL ],
      x: 2,
      y: 0
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 0, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 1, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 0, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 1, metatile: 2, tileSize: 256 }), tile)

    tile = {
      width: 512,
      height: 512,
      tiles: [ [2, 0, 2], [2, 0, 3], [2, 1, 2], [2, 1, 3] ],
      bbox: [ -FULL, -FULL, HALF, -HALF ],
      x: 0,
      y: 2
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 2, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 3, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 2, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 3, metatile: 2, tileSize: 256 }), tile)

    tile = {
      width: 512,
      height: 512,
      tiles: [ [2, 2, 2], [2, 2, 3], [2, 3, 2], [2, 3, 3] ],
      bbox: [ HALF, -FULL, FULL, -HALF ],
      x: 2,
      y: 2
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 2, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 3, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 2, metatile: 2, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 3, metatile: 2, tileSize: 256 }), tile)
  })

  it('metatile = 3', function () {
    let tile = {
      width: 768,
      height: 768,
      tiles: [ [2, 0, 0], [2, 0, 1], [2, 0, 2], [2, 1, 0], [2, 1, 1], [2, 1, 2], [2, 2, 0], [2, 2, 1], [2, 2, 2] ],
      bbox: [ -FULL, -QUADX, QUADX, FULL ],
      x: 0,
      y: 0
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 0, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 1, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 2, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 0, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 1, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 2, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 0, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 1, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 2, metatile: 3, tileSize: 256 }), tile)

    tile = {
      width: 768,
      height: 256,
      tiles: [ [2, 0, 3], [2, 1, 3], [2, 2, 3] ],
      bbox: [ -FULL, -FULL, QUADX, -QUADX ],
      x: 0,
      y: 3
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 3, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 3, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 3, metatile: 3, tileSize: 256 }), tile)

    tile = {
      width: 256,
      height: 768,
      tiles: [ [2, 3, 0], [2, 3, 1], [2, 3, 2] ],
      bbox: [ QUADX, -QUADX, FULL, FULL ],
      x: 3,
      y: 0
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 0, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 1, metatile: 3, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 2, metatile: 3, tileSize: 256 }), tile)

    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 3, metatile: 3, tileSize: 256 }), {
      width: 256,
      height: 256,
      tiles: [ [2, 3, 3] ],
      bbox: [ QUADX, -FULL, FULL, -QUADX ],
      x: 3,
      y: 3
    })
  })

  it('metatile = 4', function () {
    const tile = {
      width: 1024,
      height: 1024,
      tiles: [ [2, 0, 0], [2, 0, 1], [2, 0, 2], [2, 0, 3], [2, 1, 0], [2, 1, 1], [2, 1, 2], [2, 1, 3], [2, 2, 0], [2, 2, 1], [2, 2, 2], [2, 2, 3], [2, 3, 0], [2, 3, 1], [2, 3, 2], [2, 3, 3] ],
      bbox: [ -FULL, -FULL, FULL, FULL ],
      x: 0,
      y: 0
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 0, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 1, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 2, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 3, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 0, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 1, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 2, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 3, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 0, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 1, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 2, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 3, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 0, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 1, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 2, metatile: 4, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 3, metatile: 4, tileSize: 256 }), tile)
  })

  it('metatile = 5', function () {
    const tile = {
      width: 1024,
      height: 1024,
      tiles: [ [2, 0, 0], [2, 0, 1], [2, 0, 2], [2, 0, 3], [2, 1, 0], [2, 1, 1], [2, 1, 2], [2, 1, 3], [2, 2, 0], [2, 2, 1], [2, 2, 2], [2, 2, 3], [2, 3, 0], [2, 3, 1], [2, 3, 2], [2, 3, 3] ],
      bbox: [ -FULL, -FULL, FULL, FULL ],
      x: 0,
      y: 0
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 0, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 1, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 2, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 3, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 0, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 1, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 2, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 3, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 0, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 1, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 2, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 3, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 0, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 1, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 2, metatile: 5, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 3, metatile: 5, tileSize: 256 }), tile)
  })

  it('metatile = 13', function () {
    const tile = {
      width: 1024,
      height: 1024,
      tiles: [ [2, 0, 0], [2, 0, 1], [2, 0, 2], [2, 0, 3], [2, 1, 0], [2, 1, 1], [2, 1, 2], [2, 1, 3], [2, 2, 0], [2, 2, 1], [2, 2, 2], [2, 2, 3], [2, 3, 0], [2, 3, 1], [2, 3, 2], [2, 3, 3] ],
      bbox: [ -FULL, -FULL, FULL, FULL ],
      x: 0,
      y: 0
    }
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 0, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 1, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 2, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 0, y: 3, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 0, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 1, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 2, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 1, y: 3, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 0, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 1, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 2, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 2, y: 3, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 0, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 1, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 2, metatile: 13, tileSize: 256 }), tile)
    assert.deepStrictEqual(calculateMetatile({ z: 2, x: 3, y: 3, metatile: 13, tileSize: 256 }), tile)
  })
})
