import Bounds from '../bounds';
import { expect } from 'chai';
import Point from '../point';

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
      expect(bounds1.equal(bounds2)).to.true;
    });
  });

  describe('getPoints',():void=>{
    it('should return points data', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(100, 100))).to.true;
      expect(points[1].equal(new Point(200, 100))).to.true;
      expect(points[2].equal(new Point(200, 200))).to.true;
      expect(points[3].equal(new Point(100, 200))).to.true;
    });
  });

  describe('getPoints',():void=>{
    it('should return points data', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(100, 100))).to.true;
      expect(points[1].equal(new Point(200, 100))).to.true;
      expect(points[2].equal(new Point(200, 200))).to.true;
      expect(points[3].equal(new Point(100, 200))).to.true;
    });
  });

  describe('extend',():void=>{
    it('should update bounds when extend by point (extend to left)', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      bounds.extendByPoint( new Point( 0, 100 ));
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(0, 100))).to.true;
      expect(points[1].equal(new Point(200, 100))).to.true;
      expect(points[2].equal(new Point(200, 200))).to.true;
      expect(points[3].equal(new Point(0, 200))).to.true;
    });

    it('should update bounds when extend by point (extend to right)', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      bounds.extendByPoint( new Point( 300, 100 ));
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(100, 100))).to.true;
      expect(points[1].equal(new Point(300, 100))).to.true;
      expect(points[2].equal(new Point(300, 200))).to.true;
      expect(points[3].equal(new Point(100, 200))).to.true;
    });

    it('should update bounds when extend by point (extend to up)', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      bounds.extendByPoint( new Point( 100, 0 ));
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(100, 0))).to.true;
      expect(points[1].equal(new Point(200, 0))).to.true;
      expect(points[2].equal(new Point(200, 200))).to.true;
      expect(points[3].equal(new Point(100, 200))).to.true;
    });

    it('should update bounds when extend by point (extend to down)', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      bounds.extendByPoint( new Point( 100, 300 ));
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(100, 100))).to.true;
      expect(points[1].equal(new Point(200, 100))).to.true;
      expect(points[2].equal(new Point(200, 300))).to.true;
      expect(points[3].equal(new Point(100, 300))).to.true;
    });

    it('should update bounds when extend by point (extend to left up)', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      bounds.extendByPoint( new Point( 0, 0 ));
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(0, 0))).to.true;
      expect(points[1].equal(new Point(200, 0))).to.true;
      expect(points[2].equal(new Point(200, 200))).to.true;
      expect(points[3].equal(new Point(0, 200))).to.true;
    });

    it('should update bounds when extend by point (extend to left down)', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      bounds.extendByPoint( new Point( 0, 300 ));
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(0, 100))).to.true;
      expect(points[1].equal(new Point(200, 100))).to.true;
      expect(points[2].equal(new Point(200, 300))).to.true;
      expect(points[3].equal(new Point(0, 300))).to.true;
    });

    it('should update bounds when extend by point (extend to right up)', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      bounds.extendByPoint( new Point( 300, 0 ));
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(100, 0))).to.true;
      expect(points[1].equal(new Point(300, 0))).to.true;
      expect(points[2].equal(new Point(300, 200))).to.true;
      expect(points[3].equal(new Point(100, 200))).to.true;
    });

    it('should update bounds when extend by point (extend to right down)', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      bounds.extendByPoint( new Point( 300, 300 ));
      const points:Point[] = bounds.getPoints();
      expect(points[0].equal(new Point(100, 100))).to.true;
      expect(points[1].equal(new Point(300, 100))).to.true;
      expect(points[2].equal(new Point(300, 300))).to.true;
      expect(points[3].equal(new Point(100, 300))).to.true;
    });

    it('should return inclusion status', ():void=>{
      const bounds:Bounds = new Bounds( 100, 100, 200, 200);
      expect(bounds.isIncludePoint( new Point( 0, 0 ))).to.false;
      expect(bounds.isIncludePoint( new Point( 300, 0 ))).to.false;
      expect(bounds.isIncludePoint( new Point( 300, 300 ))).to.false;
      expect(bounds.isIncludePoint( new Point( 0, 300 ))).to.false;
      expect(bounds.isIncludePoint( new Point( 150, 0 ))).to.false;
      expect(bounds.isIncludePoint( new Point( 300, 150 ))).to.false;
      expect(bounds.isIncludePoint( new Point( 150, 300 ))).to.false;
      expect(bounds.isIncludePoint( new Point( 0, 150 ))).to.false;
      expect(bounds.isIncludePoint( new Point( 100, 100 ))).to.true;
      expect(bounds.isIncludePoint( new Point( 200, 100 ))).to.true;
      expect(bounds.isIncludePoint( new Point( 200, 200 ))).to.true;
      expect(bounds.isIncludePoint( new Point( 100, 200 ))).to.true;
      expect(bounds.isIncludePoint( new Point( 150, 150 ))).to.true;
    });
  });
});