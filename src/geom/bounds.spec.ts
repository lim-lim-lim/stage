import Bounds from './bounds';
import { expect } from 'chai';

describe( 'geom.Bounds', ():void=>{  
  describe('constructor', ():void=>{
    it('should return default value of bounds instance', ():void=>{
      const bounds:Bounds = new Bounds();
      expect(bounds.maxX).to.equal(0);
      expect(bounds.maxY).to.equal(0);
      expect(bounds.minX).to.equal(0);
      expect(bounds.minY).to.equal(0);
    });
  });
  
  describe('extendByBounds',():void=>{
    it('should update value when extend by bounds', ():void=>{
      const bounds1:Bounds = new Bounds();
      const bounds2:Bounds = new Bounds(100, 100, 100, 100);
      bounds1.extendByBounds(bounds2);
      expect(bounds1.maxX).to.equal(200);
      expect(bounds1.maxY).to.equal(200);
      expect(bounds1.minX).to.equal(0);
      expect(bounds1.minY).to.equal(0);
    });
  });

  describe('width and height',():void=>{
    it('should return correct width', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      expect(bounds.width).to.equal(100);
    });

    it('should return correct height', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      expect(bounds.height).to.equal(100);
    });
  });

  describe('equal',():void=>{
    it('should equal is two bounds', ():void=>{
      const bounds1:Bounds = new Bounds( 100, 100, 200, 200);
      const bounds2:Bounds = new Bounds( 100, 100, 200, 200);
      expect(bounds1.equal(bounds2)).to.true
    });
  });
  
  describe('copy',():void=>{
    it('should return same bounds instance', ():void=>{
      const bounds1:Bounds = new Bounds( 100, 100, 100, 100);
      const bounds2:Bounds = bounds1.copy();
      expect(bounds1.equal(bounds2)).to.true
    });
  });
});