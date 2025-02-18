import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import News from '@/views/News.vue';
import Matches from '@/views/Matches.vue';
import Clubs from '@/views/Clubs.vue';
import Stats from '@/views/Stats.vue';
import Analytics from '@/views/Analytics.vue';
import TeamDetail from '@/views/TeamDetail.vue';
import SearchResults from '@/views/SearchResults.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/news', name: 'News', component: News },
    { path: '/matches', name: 'Matches', component: Matches },
    { path: '/clubs', name: 'Clubs', component: Clubs },
    { path: '/stats', name: 'Stats', component: Stats },
    { path: '/analytics', name: 'Analytics', component: Analytics },
    { path: '/team/:id', name: 'TeamDetail', component: TeamDetail },
    { path: '/search', name: 'SearchResults', component: SearchResults },
  ],
}); 