const CENTRALIZED_COORDINATES = [-54, -14.8267];
const MAP_ZOOM = 3.99;
const BR_STATES_DATA = 'data/br-states.json';
const STANDING_CHART_DATA = 'data/g4_static.csv';
const CLUB_GOALS_DATA = "data/total_goals_per_team.csv";
const HOME_AWAY_GOALS_DATA = "data/home_away_goals_per_team.csv";
const TEAMS_DATA = "data/2017_clubes.csv";
const CHART_HEIGHT = 500;



// Main execution when HTML DOM finishes loading
$(main);

function main() {
    let map = create_map('map', CENTRALIZED_COORDINATES[1],
                CENTRALIZED_COORDINATES[0], MAP_ZOOM);

    superimpose_geojson(BR_STATES_DATA, map);
    standings_series_chart('standingsChart', STANDING_CHART_DATA);
    goals_bar_chart('goalsChart', CLUB_GOALS_DATA);
    home_away_pie_chart('homeAwayChart', HOME_AWAY_GOALS_DATA);
}
