import Point from './point';
import { expect } from 'chai';

describe('geom.Point', (): void => {
  describe('constructor', (): void => {
    it('should return default value of point instance', (): void => {
      const point: Point = new Point();
      expect(point.x).to.equal(0);
      expect(point.y).to.equal(0);
    });
  });

  describe('update position', (): void => {
    it('should update x and y when input to value', (): void => {
      const point: Point = new Point();
      point.x = 100;
      point.y = 200;
      expect(point.x).to.equal(100);
      expect(point.y).to.equal(200);
    });
  });

  describe('equal',():void=>{
    it('should equal is two point', ():void=>{
      const point1:Point = new Point( 100, 100 );
      const point2:Point = new Point( 100, 100 );
      expect(point1.equal(point2)).to.true
    });
  });

  describe('copy',():void=>{
    it('should return same point instance', ():void=>{
      const point1:Point = new Point( 100, 100 );
      const point2:Point = point1.copy();
      expect(point1.equal(point2)).to.true
    });
  });
});