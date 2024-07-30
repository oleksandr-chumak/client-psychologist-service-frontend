import { ref } from 'vue';

export const useModal = (defaultValue: boolean = false) => {
  const open = ref(defaultValue);
  const handleModalOpen = () => open.value = true;
  const handleModalClose = () => open.value = false;

  return { open, handleModalOpen, handleModalClose };
};
