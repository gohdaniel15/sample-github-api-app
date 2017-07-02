import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        let url = `https://api.github.com/search/repositories?q=${param}`

        return Ember.$.getJSON(url).then((data) => {
          return data.items.filter(function(repo) {
            let repos = repo.full_name.includes(param)
            return repos
          })
        });
      } else {
        let url = 'https://api.github.com/repositories'

        return Ember.$.getJSON(url).then((data) => {
          return data;
        });
      }
    }
  }
});
