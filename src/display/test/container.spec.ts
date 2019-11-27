import Container from "../container";
import Display from "../display";
import { expect } from 'chai';

describe('display.Container', (): void => {
  describe('add child', (): void => {
    it('should add child display', (): void => {
      const container: Container = new Container();
      const child1: Display = new Display();
      const child2: Display = new Display();
      container.addChild(child1);
      container.addChild(child2);
      expect(container.childs.size).to.equal(2);
    });

    it('should remove child display', (): void => {
      const container: Container = new Container();
      const child1: Display = new Display();
      const child2: Display = new Display();
      container.addChild(child1);
      container.addChild(child2);
      container.removeChild(child2);
      expect(container.childs.size).to.equal(1);
    });
  });
});