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

  
});