import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    experience: {},
    projects: require('@/data/projects.json')
  },
  getters: {
    getExperience: state => state.experience,
    getExperienceBySlug: (state) => (slug) => {
      return state.experience[slug]
    },
    getProjects: state => state.projects,
    getProjectsBySlug: (state, getters) => (slug) => {
      return state.projects[slug]
    }
  }
})
