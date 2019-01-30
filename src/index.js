import app from './components/app.vue'
import Vue from "vue"


new Vue({
	el:"#app",
	render(createelement) {
		return createelement(app);
	}
});