
var matchData =  []; 
var team1;
var team2;

$.ajax({
        url: 'get_match_data/',
        success: function(result){
                matchData = JSON.parse(result);
                team1 = matchData['team1']
                team2 = matchData['team2']
                
        },
        fail: function(error){
                console.log(error);
        }
})

d3.select("#start-fing")
    .on("click", function(){ 
        start_bating(team1,"team1");
        $(this).toggleClass("hide");
        $("#start-sing").toggleClass("hide");
    })

d3.select("#start-sing")
    .on("click", function(){ 
        start_bating(team2,"team2");
        $(this).toggleClass("hide");
        $("#start-fing").toggleClass("hide");
    })
    
function start_bating(data, id){
    "create a ball for each run for 4 and 6 place outer the stadium and inside"
    var svg = d3.select(`div.${id} svg`);
    var size = 50
    var radius = 200;
    var dispersion = 0;
    var totalScore = 0;
    var noOfSixs = 0;
    var noOfFours = 0;
    var totalExtraRuns = 0;
    var angle, offset, cx, cy, r;
    data.forEach((ball, index) => {
        angle = Math.random() * Math.PI * 2;
        offset = size + radius + dispersion;

        if(ball.runs_scored || ball.extra_runs){
            totalScore = totalScore + ball.runs_scored + ball.extra_runs;
            cx = offset + Math.cos(angle) * radius;
            cy = offset + Math.sin(angle) * radius,
            r = 10;

            if(ball.runs_scored == 6){
                noOfSixs = noOfSixs +1;
                var six = svg.select("text.sixs")
                    .transition()
                    .duration(1000)
                    .delay(index * 100)
                    .text(noOfSixs +"")
            }
            if(ball.runs_scored ==4){
                noOfFours = noOfFours +1;
                var four = svg.select("text.fours")
                    .transition()
                    .duration(1000)
                    .delay(index * 100)
                    .text(noOfFours +"")
            }

            if(ball.extra_runs){
                totalExtraRuns = totalExtraRuns + ball.extra_runs;
                var four = svg.select("text.extra_runs")
                    .transition()
                    .duration(1000)
                    .delay(index * 100)
                    .text(totalExtraRuns +"")
            }else{
                var run = svg.select("text.run")
                    .transition()
                    .duration(1000)
                    .delay(index * 100)
                    .text(totalScore +"")
            }

            var circle = svg.append('circle')
                            .attr("cx", "250")
                            .attr("cy", "120")
                            .attr("r", "5")
                            .attr("fill", "#1e9540")
                            .attr("class", "ball")

            circle.transition()
                    .duration(1000)
                    .delay(index * 100)
                    .attr('cx',cx)
                    .attr('cy',cy)
                    .attr('r', r)
                    .attr("fill", "red")
         

        }

    });
}
