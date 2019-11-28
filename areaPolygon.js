function distict(x1, y1, x2, y2){
	return Math.pow(Math.pow(x1-x2,2)+Math.pow(y1-y2,2),0.5)
}

function arr(ar){
	var rs = [];
	for(var i = 1; i < ar.length;i++){
		var p1 = ar[i-1];
		var p2 = ar[i];
		var dis = distict(p1[0],p1[1],p2[0],p2[1]);
		rs.push(dis);
	}
	return rs;
}

function circumferencePolygon(ar){
	var sum = 0;
	for(var i = 1; i < ar.length;i++){
		var p1 = ar[i-1];
		var p2 = ar[i];
		var dis = distict(p1[0],p1[1],p2[0],p2[1]);
		sum += dis;
	}
	return sum;
}


function areaPolygon(a) {
  var area = 0;
  var first = a[0];
	var e0 = [0, 0];
	var e1 = [0, 0];
  var l = a.length;
  for (var i=2; i<l; i++) {
    var p = a[i-1];
    var c = a[i];
    e0[0] = first[0] - c[0];
    e0[1] = first[1] - c[1];
    e1[0] = first[0] - p[0];
    e1[1] = first[1] - p[1];

    area += (e0[0] * e1[1]) - (e0[1] * e1[0]);
  }
  return Math.abs(area)/2;
}
