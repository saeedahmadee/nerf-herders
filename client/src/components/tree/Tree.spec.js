import { shallowMount } from "@vue/test-utils";
import Tree from "./Tree.vue";

describe("Tree.vue", () => {
  const wrapper = shallowMount(Tree);
  it('should render correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
