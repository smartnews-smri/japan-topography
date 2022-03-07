const showPrefecture = () => {

  const getFilePath = () => {
    let type  = $("#select-filetype").val();
    let pref  = $("#select-prefecture").val();
    let ret = "";

    if (type === "prefectures") {
      ret = "../data/municipality/topojson/s0001/prefectures.json";
      $("#select-prefecture").prop("disabled", "disabled");
      $("#select-prefecture").val("00");
    } else {
      $("#select-prefecture").prop("disabled", "");
      if (pref === "00") {
        if (type === "constituency") ret = "../data/constituency/topojson/s0001/senkyoku289polygon.json";
        if (type === "municipality") ret = "../data/municipality/topojson/s0001/N03-21_210101.json";
      } else {
        if (type === "constituency") ret = "../data/constituency/topojson/s0010/senkyoku289polygon_" + pref + ".json";
        if (type === "municipality") ret = "../data/municipality/topojson/s0010/N03-21_" + pref + "_210101.json";
      }
    }

    return ret;
  }

  const updateTableInfo = (d) => {
    $("#table-info").empty();
    Object.keys(d.properties).map((key) => {
      let tr = '<tr>'
                + '<th>' + key + '</th>'
                + '<td>' + d.properties[key] + '</td>'
               + '</tr>';

      $("#table-info").append(tr);
    });
  }


  let width  = $("#map").width();
  let height = $("#map").height();

  $("#map").empty();
  $("#table-info").empty();

  let projection = d3.geoMercator();
  let svg = d3.select("#map");
  let path = d3.geoPath().projection(projection);
  let g = svg.append("g");

  let filepath = getFilePath();
  let filekey  = filepath.split("/").slice(-1)[0].replace(".json", "");

  d3.json(filepath).then(function(topology) {
    const maps2geo = topojson.feature(topology, topology.objects[filekey]);
    projection.fitExtent([[0,0],[width, height]], maps2geo);
    g.selectAll("path")
       .data(maps2geo.features)
       .enter().append("path")
       .attr("fill", "#ffffff")
       .attr("d", path)
       .on('click tap touch', function(d, i){
         g.selectAll("path").attr('fill', "#ffffff");
         d3.select(this).attr('fill', "yellow");
         updateTableInfo(d);
       });
  });

  let zoom = d3.zoom()
        .scaleExtent([1, 2000])
        .on('zoom', function() {
            g.selectAll('path').attr('transform', d3.event.transform);
  });

  svg.transition()
      .duration(0)
      .call(zoom.transform, d3.zoomIdentity);

  svg.call(zoom);

  $("#download-geojson").attr("href", filepath.replace("topojson", "geojson"));
  $("#download-topojson").attr("href", filepath);
}

$(function(){
  $("select").on("change", function(){
    showPrefecture();
  });

  showPrefecture();
});
