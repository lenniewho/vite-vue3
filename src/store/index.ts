import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
	const name = ref('');
	function setName(newName: string) {
		name.value = newName;
	}
	return { name, setName };
});