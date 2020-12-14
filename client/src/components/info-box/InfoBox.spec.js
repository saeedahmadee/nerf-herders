import { shallowMount } from "@vue/test-utils";
import InfoBox from "./InfoBox.vue";

describe("InfoBox.vue", () => {
  const wrapper = shallowMount(InfoBox, {
    propsData: {
      info: {
        name: "TEST",
        description: "TEXT"
      }
    },
  });

  it('should render correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('Methods', () => {
    describe('closeModal', () => {
      it('should emit close when modal dismissed', () => {
        wrapper.vm.$refs.backdrop = 'test';
        wrapper.vm.closeModal({ target: 'test' });
        expect(wrapper.emitted().close).toBeTruthy();
      });
    });
  });
});
