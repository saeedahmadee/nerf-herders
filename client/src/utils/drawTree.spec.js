import * as d3 from "d3";
import drawTree from "./drawTree";

jest.mock('./drawTree', () => {
  return {
    drawNodes: jest.fn(),
    drawLinks: jest.fn(),
  };
});

describe("drawTree", () => {
  it('check drawNodes exists', () => {
    drawTree.drawNodes();
    expect(drawTree.drawNodes).toHaveBeenCalled();
  });
  it('check drawLinks exists', () => {
    drawTree.drawLinks();
    expect(drawTree.drawLinks).toHaveBeenCalled();
  });
});
