(this["webpackJsonpcovid-19-nsw"]=this["webpackJsonpcovid-19-nsw"]||[]).push([[0],{436:function(e,t,a){e.exports=a(935)},441:function(e,t,a){},784:function(e,t,a){},931:function(e,t,a){},933:function(e,t,a){},935:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"dailyHistorys",(function(){return K})),a.d(r,"todaySummarys",(function(){return X})),a.d(r,"predicts",(function(){return Y}));var o={};a.r(o),a.d(o,"dailyHistorys",(function(){return $})),a.d(o,"todaySummarys",(function(){return ee})),a.d(o,"predicts",(function(){return te}));var n={};a.r(n),a.d(n,"dailyHistorys",(function(){return ae})),a.d(n,"todaySummarys",(function(){return re})),a.d(n,"predicts",(function(){return oe}));var d={};a.r(d),a.d(d,"dailyHistorys",(function(){return ne})),a.d(d,"todaySummarys",(function(){return de})),a.d(d,"predicts",(function(){return le}));var l={};a.r(l),a.d(l,"dailyHistorys",(function(){return me})),a.d(l,"todaySummarys",(function(){return ie})),a.d(l,"predicts",(function(){return ue}));var m={};a.r(m),a.d(m,"dailyHistorys",(function(){return ce})),a.d(m,"todaySummarys",(function(){return se})),a.d(m,"predicts",(function(){return Ne}));var i={};a.r(i),a.d(i,"dailyHistorys",(function(){return be})),a.d(i,"todaySummarys",(function(){return fe})),a.d(i,"predicts",(function(){return pe}));var u={};a.r(u),a.d(u,"dailyHistorys",(function(){return Ce})),a.d(u,"todaySummarys",(function(){return he})),a.d(u,"predicts",(function(){return ye}));var c={};a.r(c),a.d(c,"todaySummarys",(function(){return we}));var s=a(0),N=a.n(s),b=a(89),f=a.n(b),p=(a(441),a(424)),C=a(423),h=a(401),y=a.n(h),w=a(946),E=a(108),M=a.n(E),v=function(e,t,a){var r=t.map((function(e){var t=e.date,a=e.todayNewNumber;return[new Date(t),a]}));return{legend:{show:!0,selected:{total:!0,"predicted total":!1,"new cases on the day":!0}},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value"},series:[{type:"line",name:"total",data:t.map((function(e){var t=e.date,a=e.totalConfirmedNumber;return[new Date(t),a]})),itemStyle:{normal:{label:{show:!0}}}},{type:"line",name:"predicted total",data:a.map((function(e){var t=e.date,a=e.predictedTotalConfirmedNumber;return[new Date(t),a]})),smooth:!1,itemStyle:{normal:{label:{show:!0,position:"right"},lineStyle:{width:2,type:"dotted"}}}},{type:"bar",name:"new cases on the day",data:r,itemStyle:{normal:{label:{show:!0,position:"top"}}}}]}},T=function(e){e.id;var t=e.dailyHistorys,a=e.predicts;return N.a.createElement(N.a.Fragment,null,N.a.createElement(M.a,{option:v(0,t,a)}))},S=function(e){for(var t=[],a=[],r=[],o=[],n=0;n<e.length;n++){var d=e[n],l=new Date(d.Date);t.push([l,d.confirmed]),a.push([l,d["under investigation"]]),r.push([l,d.excluded]),o.push([l,d["total tested"]])}return{legend:{show:!0},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value",axisLabel:{formatter:function(e){return e>=1e3?"".concat(e/1e3,"k"):e}}},series:[{type:"line",name:"total confirmed",data:t},{type:"line",name:"under investigation",data:a},{type:"line",name:"tested and excluded",data:r},{type:"line",name:"total tested",data:o}]}},g=function(e){var t=e.statistics;return N.a.createElement(N.a.Fragment,null,N.a.createElement(M.a,{option:S(t)}))},D=function(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&"number"===typeof e[a]&&t.push({name:a,value:e[a]});return{legend:{orient:"vertical",left:0},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{type:"pie",radius:["50%","70%"],avoidLabelOverlap:!0,left:50,name:"source",data:t,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"12",fontWeight:"bold"}}}}]}},R=function(e){var t=e.source;return N.a.createElement(N.a.Fragment,null,N.a.createElement(M.a,{option:D(t)}))},A=function(e){var t=e.id,a=e.dailyHistorys,r=e.predicts,o=e.source,n=e.statistics;return N.a.createElement(N.a.Fragment,null,N.a.createElement("h2",{className:"ui small header"},"Trending:"),N.a.createElement(w.a,{columns:"equal",stackable:!0},N.a.createElement(w.a.Column,null,N.a.createElement(T,{id:t,dailyHistorys:a,predicts:r})),o&&N.a.createElement(w.a.Column,null,N.a.createElement(R,{source:o})),n&&n.length>=5&&N.a.createElement(w.a.Column,null,N.a.createElement(g,{statistics:n}))))},W=a(945),x=a(943),H=(a(784),{NSW:"https://www.health.nsw.gov.au/news/pages/2020-nsw-health.aspx",VIC:"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/",QLD:"https://www.health.qld.gov.au/news-events/doh-media-releases",WA:"https://ww2.health.wa.gov.au/~/media/Files/Corporate/general%20documents/Infectious%20diseases/PDF/Coronavirus/COVID19-daily-snapshot.pdf",SA:"https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/about+us/news+and+media/all+media+releases/all+media+releases",NT:"https://securent.nt.gov.au/alerts/coronavirus-covid-19-updates",TAS:"https://www.dhhs.tas.gov.au/news/2020",ACT:"https://www.health.act.gov.au/public-health-alert/updated-information-about-covid-19"}),F=function(e){var t,a,r,o=e.id,n=e.todaySummarys,d=e.statistics,l=n.totalConfirmedNumber,m=n.totalRecoveredNumber,i=n.totalDeathNumber,u=n.totalRemianNumber,c=n.todayNewNumber,s=n.otherStateRecords,b=d.filter((function(e){return e.State===o}))[0];return b&&(t=b["under investigation"],a=b.excluded,r=b["total tested"]),N.a.createElement("div",{className:"summary"},N.a.createElement("h2",{className:"ui small header"},"Summary data:"),N.a.createElement(w.a,{columns:"equal"},N.a.createElement(w.a.Column,null,N.a.createElement(W.a,{color:"blue",label:"Remain",value:u})),N.a.createElement(w.a.Column,null,N.a.createElement(W.a,{color:"red",label:"Total",value:l})),N.a.createElement(w.a.Column,null,N.a.createElement(W.a,{color:"grey",label:"Death",value:i})),N.a.createElement(w.a.Column,null,N.a.createElement(W.a,{color:"green",label:"Recover",value:m}))),N.a.createElement(x.a,{unstackable:!0,compact:!0},N.a.createElement(x.a.Body,null,N.a.createElement(x.a.Row,{negative:!0},N.a.createElement(x.a.Cell,null,"New cases today"),N.a.createElement(x.a.Cell,null,0===c?N.a.createElement(N.a.Fragment,null,"Pending data"):c)),t&&N.a.createElement(x.a.Row,null,N.a.createElement(x.a.Cell,null,"Cases under investigation"),N.a.createElement(x.a.Cell,null,t)),a&&N.a.createElement(x.a.Row,null,N.a.createElement(x.a.Cell,null,"Cases tested and excluded"),N.a.createElement(x.a.Cell,null,a))),r&&N.a.createElement(x.a.Footer,null,N.a.createElement(x.a.Row,null,N.a.createElement(x.a.HeaderCell,null,"Total tested"),N.a.createElement(x.a.HeaderCell,null,r)))),N.a.createElement("p",null,"Data source:"," ",N.a.createElement("a",{href:H[o],target:"_blank",rel:"noopener noreferrer"},o," Health")),0!==s.length&&N.a.createElement(N.a.Fragment,null,N.a.createElement("p",{className:"ui small"},s.length," ",1===s.length?N.a.createElement(N.a.Fragment,null,"case is other state's resident"):N.a.createElement(N.a.Fragment,null,"cases are other state's residents"),", count in their number in national data.")))},I=a(405),k={NSW:"shrwCf9WUJrBKNZHB",VIC:"shrKh4I4XuWbUr0mh",QLD:"shrqzrS1Px0JXrM4h",WA:"shrY62a2829RpTIfn",SA:"shrGGCzlLOETWFzNd",TAS:"shrfEwUbg7HbtyIOm",NT:"shrrueAhnuETjOJVW",ACT:"shrmTt5x64kBoIHOs"},U=function(e){var t=e.id;return N.a.createElement(N.a.Fragment,null,N.a.createElement("h2",{className:"ui small header"},"Confirmed cases details(best view on desktop):"),N.a.createElement(I.a,{className:"airtable-embed",url:"https://airtable.com/embed/".concat(k[t],"?backgroundColor=teal"),frameborder:"0",onmousewheel:"",width:"100%",height:"500"}))},O=a(941),V=a(947),L=a(944),j=function(){return N.a.createElement(O.a,{trigger:N.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Joanna and her friends (Disclaimer)")},N.a.createElement(O.a.Header,null,"Team, Thanks and Disclaimer"),N.a.createElement(O.a.Content,null,N.a.createElement(O.a.Description,null,N.a.createElement(V.a,null,"Team member"),N.a.createElement(L.a,{bulleted:!0},N.a.createElement(L.a.Item,null,N.a.createElement("a",{href:"https://wileam.com/"},"Joanna Wu"),": design and develop the website, update the data."),N.a.createElement(L.a.Item,null,N.a.createElement("a",{href:"https://ngot.me/"},"Henry Zhuang"),": devops and update the data"),N.a.createElement(L.a.Item,null,N.a.createElement("a",{href:"https://ivanfan.net/"},"Ivan(Yifan) Fan"),": developer, add regression prediction functionality"),N.a.createElement(L.a.Item,null,N.a.createElement("a",{href:"https://www.sydneytoday.com/"},"Sydney Today"),": media, provide updated data from NSW Health"),N.a.createElement(L.a.Item,null,"Nan Zhang, update and analysis the data.")),N.a.createElement(V.a,null,"Thanks to"),N.a.createElement(L.a,{bulleted:!0},N.a.createElement(L.a.Item,null,N.a.createElement("a",{href:"https://www.echartsjs.com/"},"echarts")),N.a.createElement(L.a.Item,null,N.a.createElement("a",{href:"https://airtable.com/"},"airtable"))),N.a.createElement(V.a,null,"Disclaimer"),N.a.createElement(L.a,{bulleted:!0},N.a.createElement(L.a.Item,null,"The views and options expressed in this blog are those of the authors and do not necessarily reflect the official policy or position of any other agency, organization, employer or company"),N.a.createElement(L.a.Item,null,'Authors are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information'),N.a.createElement(L.a.Item,null,"We do not make any warranties about the completeness, reliability and accuracy of these information. None of the authors, contributors, adminstrators or anyone else connected with this website, in anyway whatsoever, can be responsible for your use of the information contained in or linked from these web pages. Any action you take upon the information on this website is strictly at your own risk. and we will not be liable for any losses and damages in connection with the use of our website.")))))},J=function(){return N.a.createElement(O.a,{trigger:N.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"contribute?")},N.a.createElement(O.a.Header,null,"Help needed!"),N.a.createElement(O.a.Content,null,N.a.createElement(O.a.Description,null,N.a.createElement("p",null,"Now as there is no api provided, all the data are manually updated."),N.a.createElement("p",null,"We need more people to keep the data updated!! Please join telegram"," ","",N.a.createElement("a",{href:"https://t.me/covid_19_au"},"@covid_19_au")," if you wanna help, what we need is simply: when you saw data updated, notify in the group with the source link, thank you!"))))},_=function(){return N.a.createElement("p",null,N.a.createElement("small",null,"Made by ",N.a.createElement(j,null),", ",N.a.createElement(J,null)))},q=a(949),z=a(250),B=function(){var e="https://covid-19.wileam.com/";return N.a.createElement(q.a,q.a.onlyComputer,N.a.createElement("p",{style:{textAlign:"right"}},"Share the page:",N.a.createElement(z.Facebook,{link:e}),N.a.createElement(z.Twitter,{link:e})))},P=(a(931),function(e){var t=e.id,a=e.data,r=a[t].todaySummarys,o=r.totalConfirmedNumber,n=r.totalRecoveredNumber,d=r.totalDeathNumber,l=r.totalRemianNumber,m=r.todayNewNumber,i=r.otherStateRecords;return N.a.createElement("div",{className:"summary"},N.a.createElement("h2",{className:"ui small header"},"Summary data:"),N.a.createElement(w.a,{columns:"equal"},N.a.createElement(w.a.Column,null,N.a.createElement(W.a,{color:"blue",label:"Active",value:l-i.filter((function(e){return"active"===e.status})).length})),N.a.createElement(w.a.Column,null,0!==m&&N.a.createElement("span",{className:"small ui today-new-number"},"+",m),N.a.createElement(W.a,{color:"red",label:"Total",value:o-i.length})),N.a.createElement(w.a.Column,null,N.a.createElement(W.a,{color:"grey",label:"Death",value:d-i.filter((function(e){return"death"===e.status})).length})),N.a.createElement(w.a.Column,null,N.a.createElement(W.a,{color:"green",label:"Recover",value:n-i.filter((function(e){return"dispatched"===e.status})).length}))),N.a.createElement(x.a,{unstackable:!0,compact:!0},N.a.createElement(x.a.Header,null,N.a.createElement(x.a.Row,{textAlign:"center"},N.a.createElement(x.a.HeaderCell,null,"State"),N.a.createElement(x.a.HeaderCell,null,"Active"),N.a.createElement(x.a.HeaderCell,null,"Total"),N.a.createElement(x.a.HeaderCell,null,"Total death"),N.a.createElement(x.a.HeaderCell,null,"Total recover"))),["NSW","VIC","QLD","WA","SA","TAS","NT","ACT"].map((function(e){var t=a[e].todaySummarys,r=t.otherStateRecords.length,o=t.otherStateRecords.filter((function(e){return"active"===e.status})).length,n=t.otherStateRecords.filter((function(e){return"discharged"===e.status})).length,d=t.otherStateRecords.filter((function(e){return"death"===e.status})).length;return N.a.createElement(x.a.Body,null,N.a.createElement(x.a.Row,{textAlign:"center"},N.a.createElement(x.a.Cell,null,e),N.a.createElement(x.a.Cell,null,t.totalRemianNumber-o,0!==o&&N.a.createElement(N.a.Fragment,null,"*")),N.a.createElement(x.a.Cell,null,N.a.createElement("strong",null,t.totalConfirmedNumber-r,0!==r&&N.a.createElement(N.a.Fragment,null,"*"),0!==t.todayNewNumber&&N.a.createElement(N.a.Fragment,null,"(+",t.todayNewNumber,")"))),N.a.createElement(x.a.Cell,null,t.totalDeathNumber-d,0!==d&&N.a.createElement(N.a.Fragment,null,"*")),N.a.createElement(x.a.Cell,null,t.totalRecoveredNumber-n,0!==n&&N.a.createElement(N.a.Fragment,null,"*"))))}))),N.a.createElement("p",{className:"ui small"},"* Note that under NNDSS(National Notifiable Diseases Surveillance System) reporting requirements, cases are reported based on their Australian jurisdiction of residence rather than where they were detected."))}),Q=a(253),G=a(70),Z=a(940),K=[{date:"Mar 01, 2020",todayNewNumber:2,totalConfirmedNumber:6},{date:"Mar 02, 2020",todayNewNumber:3,totalConfirmedNumber:9},{date:"Mar 03, 2020",todayNewNumber:6,totalConfirmedNumber:15},{date:"Mar 04, 2020",todayNewNumber:7,totalConfirmedNumber:22},{date:"Mar 05, 2020",todayNewNumber:3,totalConfirmedNumber:25},{date:"Mar 06, 2020",todayNewNumber:3,totalConfirmedNumber:28},{date:"Mar 07, 2020",todayNewNumber:8,totalConfirmedNumber:36},{date:"Mar 08, 2020",todayNewNumber:4,totalConfirmedNumber:40},{date:"Mar 09, 2020",todayNewNumber:7,totalConfirmedNumber:47},{date:"Mar 10, 2020",todayNewNumber:14,totalConfirmedNumber:61},{date:"Mar 11, 2020",todayNewNumber:4,totalConfirmedNumber:65},{date:"Mar 12, 2020",todayNewNumber:13,totalConfirmedNumber:78},{date:"Mar 13, 2020",todayNewNumber:14,totalConfirmedNumber:92},{date:"Mar 14, 2020",todayNewNumber:20,totalConfirmedNumber:112},{date:"Mar 15, 2020",todayNewNumber:22,totalConfirmedNumber:134},{date:"Mar 16, 2020",todayNewNumber:37,totalConfirmedNumber:171}],X={totalConfirmedNumber:171,totalRecoveredNumber:4,totalDeathNumber:4,totalRemianNumber:163,todayNewNumber:0,otherStateRecords:[{status:"death"},{status:"active"}]},Y=[{date:"Mar 01, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 02, 2020",predictedTotalConfirmedNumber:11},{date:"Mar 03, 2020",predictedTotalConfirmedNumber:14},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:18},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:22},{date:"Mar 06, 2020",predictedTotalConfirmedNumber:27},{date:"Mar 07, 2020",predictedTotalConfirmedNumber:33},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:40},{date:"Mar 09, 2020",predictedTotalConfirmedNumber:48},{date:"Mar 10, 2020",predictedTotalConfirmedNumber:57},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:68},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:82},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:97},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:115},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:137},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:162},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:192},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:228},{date:"Mar 19, 2020",predictedTotalConfirmedNumber:270}],$=[{date:"Feb 25, 2020",todayNewNumber:3,totalConfirmedNumber:7},{date:"Mar 01, 2020",todayNewNumber:2,totalConfirmedNumber:9},{date:"Mar 04, 2020",todayNewNumber:1,totalConfirmedNumber:10},{date:"Mar 07, 2020",todayNewNumber:1,totalConfirmedNumber:11},{date:"Mar 08, 2020",todayNewNumber:1,totalConfirmedNumber:12},{date:"Mar 09, 2020",todayNewNumber:3,totalConfirmedNumber:15},{date:"Mar 10, 2020",todayNewNumber:3,totalConfirmedNumber:18},{date:"Mar 11, 2020",todayNewNumber:9,totalConfirmedNumber:27},{date:"Mar 13, 2020",todayNewNumber:9,totalConfirmedNumber:36},{date:"Mar 14, 2020",todayNewNumber:13,totalConfirmedNumber:49},{date:"Mar 15, 2020",todayNewNumber:8,totalConfirmedNumber:57},{date:"Mar 16, 2020",todayNewNumber:14,totalConfirmedNumber:71}],ee={totalConfirmedNumber:71,totalRecoveredNumber:8,totalDeathNumber:0,totalRemianNumber:63,todayNewNumber:0,otherStateRecords:[]},te=[{date:"Feb 25, 2020",predictedTotalConfirmedNumber:10},{date:"Mar 01, 2020",predictedTotalConfirmedNumber:8},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:8},{date:"Mar 07, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:12},{date:"Mar 09, 2020",predictedTotalConfirmedNumber:16},{date:"Mar 10, 2020",predictedTotalConfirmedNumber:21},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:28},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:37},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:46},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:58},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:71},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:85},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:101},{date:"Mar 19, 2020",predictedTotalConfirmedNumber:118}],ae=[{date:"Feb 28, 2020",todayNewNumber:4,totalConfirmedNumber:9},{date:"Mar 03, 2020",todayNewNumber:1,totalConfirmedNumber:10},{date:"Mar 04, 2020",todayNewNumber:1,totalConfirmedNumber:11},{date:"Mar 05, 2020",todayNewNumber:2,totalConfirmedNumber:13},{date:"Mar 06, 2020",todayNewNumber:1,totalConfirmedNumber:14},{date:"Mar 08, 2020",todayNewNumber:1,totalConfirmedNumber:15},{date:"Mar 10, 2020",todayNewNumber:3,totalConfirmedNumber:18},{date:"Mar 11, 2020",todayNewNumber:2,totalConfirmedNumber:20},{date:"Mar 12, 2020",todayNewNumber:7,totalConfirmedNumber:27},{date:"Mar 13, 2020",todayNewNumber:8,totalConfirmedNumber:35},{date:"Mar 14, 2020",todayNewNumber:11,totalConfirmedNumber:46},{date:"Mar 15, 2020",todayNewNumber:15,totalConfirmedNumber:61},{date:"Mar 16, 2020",todayNewNumber:7,totalConfirmedNumber:68}],re={totalConfirmedNumber:68,totalRecoveredNumber:8,totalDeathNumber:1,totalRemianNumber:59,todayNewNumber:0,otherStateRecords:[]},oe=[{date:"Feb 28, 2020",predictedTotalConfirmedNumber:12},{date:"Mar 03, 2020",predictedTotalConfirmedNumber:10},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:10},{date:"Mar 06, 2020",predictedTotalConfirmedNumber:11},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:14},{date:"Mar 10, 2020",predictedTotalConfirmedNumber:18},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:23},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:30},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:38},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:47},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:57},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:68},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:81},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:95},{date:"Mar 19, 2020",predictedTotalConfirmedNumber:110}],ne=[{date:"Feb 22, 2020",todayNewNumber:1,totalConfirmedNumber:1},{date:"Feb 28, 2020",todayNewNumber:1,totalConfirmedNumber:2},{date:"Mar 05, 2020",todayNewNumber:1,totalConfirmedNumber:3},{date:"Mar 08, 2020",todayNewNumber:1,totalConfirmedNumber:4},{date:"Mar 09, 2020",todayNewNumber:2,totalConfirmedNumber:6},{date:"Mar 11, 2020",todayNewNumber:3,totalConfirmedNumber:9},{date:"Mar 13, 2020",todayNewNumber:5,totalConfirmedNumber:14},{date:"Mar 14, 2020",todayNewNumber:3,totalConfirmedNumber:17},{date:"Mar 15, 2020",todayNewNumber:1,totalConfirmedNumber:18},{date:"Mar 16, 2020",todayNewNumber:10,totalConfirmedNumber:28}],de={totalConfirmedNumber:28,totalRecoveredNumber:1,totalDeathNumber:1,totalRemianNumber:26,todayNewNumber:0,otherStateRecords:[]},le=[{date:"Feb 22, 2020",predictedTotalConfirmedNumber:1},{date:"Feb 28, 2020",predictedTotalConfirmedNumber:2},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:3},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:4},{date:"Mar 09, 2020",predictedTotalConfirmedNumber:6},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:13},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:17},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:21},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:26},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:32},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:39},{date:"Mar 19, 2020",predictedTotalConfirmedNumber:46}],me=[{date:"Feb 22, 2020",todayNewNumber:1,totalConfirmedNumber:3},{date:"Mar 04, 2020",todayNewNumber:2,totalConfirmedNumber:5},{date:"Mar 05, 2020",todayNewNumber:2,totalConfirmedNumber:7},{date:"Mar 11, 2020",todayNewNumber:2,totalConfirmedNumber:9},{date:"Mar 12, 2020",todayNewNumber:3,totalConfirmedNumber:12},{date:"Mar 13, 2020",todayNewNumber:4,totalConfirmedNumber:16},{date:"Mar 14, 2020",todayNewNumber:3,totalConfirmedNumber:19},{date:"Mar 15, 2020",todayNewNumber:1,totalConfirmedNumber:20},{date:"Mar 16, 2020",todayNewNumber:9,totalConfirmedNumber:29}],ie={totalConfirmedNumber:29,totalRecoveredNumber:5,totalDeathNumber:0,totalRemianNumber:24,todayNewNumber:0,otherStateRecords:[]},ue=[{date:"Feb 22, 2020",predictedTotalConfirmedNumber:3},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:5},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:7},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:12},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:15},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:19},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:23},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:27},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:32},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:38},{date:"Mar 19, 2020",predictedTotalConfirmedNumber:43}],ce=[{date:"Mar 02, 2020",todayNewNumber:1,totalConfirmedNumber:1},{date:"Mar 08, 2020",todayNewNumber:1,totalConfirmedNumber:2},{date:"Mar 12, 2020",todayNewNumber:1,totalConfirmedNumber:3},{date:"Mar 13, 2020",todayNewNumber:1,totalConfirmedNumber:4},{date:"Mar 14, 2020",todayNewNumber:2,totalConfirmedNumber:6},{date:"Mar 15, 2020",todayNewNumber:1,totalConfirmedNumber:7}],se={totalConfirmedNumber:7,totalRecoveredNumber:1,totalDeathNumber:0,totalRemianNumber:6,todayNewNumber:0,otherStateRecords:[]},Ne=[{date:"Mar 02, 2020",predictedTotalConfirmedNumber:1},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:2},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:3},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:4},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:6},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:7},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:9},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:11},{date:"Mar 18, 2020",predictedTotalConfirmedNumber:13}],be=[{date:"Mar 10, 2020",todayNewNumber:1,totalConfirmedNumber:1,isOtherState:!0}],fe={totalConfirmedNumber:1,totalRecoveredNumber:0,totalDeathNumber:0,totalRemianNumber:1,todayNewNumber:0,otherStateRecords:[{status:"active"}]},pe=[{date:"Mar 10, 2020",predictedTotalConfirmedNumber:0}],Ce=[{date:"Mar 12, 2020",todayNewNumber:1,totalConfirmedNumber:1},{date:"Mar 15, 2020",todayNewNumber:1,totalConfirmedNumber:2}],he={totalConfirmedNumber:2,totalRecoveredNumber:0,totalDeathNumber:0,totalRemianNumber:2,todayNewNumber:0,otherStateRecords:[]},ye=[{date:"Mar 12, 2020",predictedTotalConfirmedNumber:0},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:0}],we={totalConfirmedNumber:377,totalRecoveredNumber:27,totalDeathNumber:6,totalRemianNumber:344,todayNewNumber:0,otherStateRecords:[{status:"death"},{status:"active"},{status:"active"}]},Ee={NSW:r,VIC:o,QLD:n,WA:d,SA:l,TAS:m,NT:i,ACT:u,AUS:c,statistics:[{"calc total":71,Date:"2020-03-16",State:"VIC","total tested":17e3,confirmed:71},{"calc total":1151,Date:"2020-03-16",State:"ACT",excluded:1149,confirmed:2,"total tested":1151},{"calc total":26964,Date:"2020-03-16",State:"NSW",confirmed:171,"under investigation":1282,excluded:25511,"total tested":26964},{Date:"2020-03-15",State:"NSW",confirmed:134,"under investigation":1924,"total tested":22567,excluded:20511,"calc total":22569},{Date:"2020-03-15",State:"WA",confirmed:18,excluded:5424,"calc total":5442},{Date:"2020-03-14",State:"NSW",confirmed:112,"under investigation":1668,"total tested":20496,excluded:18716,"calc total":20496},{Date:"2020-03-13",State:"NSW",confirmed:92,"under investigation":1928,"total tested":16685,excluded:14665,"calc total":16685},{Date:"2020-03-12",State:"NSW",confirmed:78,"under investigation":1831,"total tested":12949,excluded:11040,"calc total":12949},{Date:"2020-03-11",State:"NSW",confirmed:65,"under investigation":1004,"total tested":10221,excluded:9152,"calc total":10221},{Date:"2020-03-10",State:"NSW",confirmed:61,"under investigation":1008,"total tested":10165,excluded:9096,"calc total":10165},{Date:"2020-03-09",State:"NSW",confirmed:47,"under investigation":476,"total tested":8371,excluded:7848,"calc total":8371},{Date:"2020-03-08",State:"NSW",confirmed:40,"under investigation":576,"total tested":7977,excluded:7361,"calc total":7977},{Date:"2020-03-07",State:"NSW",confirmed:36,"under investigation":488,"total tested":7214,excluded:6690,"calc total":7214}],source:[{Date:"2020-03-16",State:"VIC","not identified":2,"under investigation":6,"oversea or contact of confirmed cases":63},{Date:"2020-03-16",State:"NSW",overseas:67,"contact of confirmed case":44,"under investigation":43,"not identified":17},{Date:"2020-03-15",overseas:60,"contact of confirmed case":38,"not identified":13,"under investigation":23,State:"NSW"},{Date:"2020-03-15","not identified":1,State:"VIC","oversea or contact of confirmed cases":56},{Date:"2020-03-15",overseas:6,State:"TAS"},{Date:"2020-03-15",overseas:18,"contact of confirmed case":1,"not identified":1,State:"SA"},{Date:"2020-03-15",State:"WA","oversea or contact of confirmed cases":18},{Date:"2020-03-14",overseas:51,"contact of confirmed case":32,"not identified":11,"under investigation":18,State:"NSW"},{Date:"2020-03-12",overseas:34,"contact of confirmed case":32,"not identified":2,"under investigation":10,State:"NSW"}]},Me=(a(932),a(933),{url:"https://covid-19.wileam.com/",identifier:"covid-19-wileam-com",title:"CoVid-19 Updates - NSW"}),ve=localStorage.getItem("SHOW_AUS_PAGE")||!0;function Te(e){var t=e.id,a=function(e){return"AUS"===e?Ee:Object(p.a)({},Ee[e],{source:Ee.source.filter((function(t){return t.State===e}))[0],statistics:Ee.statistics.filter((function(t){return t.State===e}))})}(t);return N.a.createElement("div",{className:"ui container"},N.a.createElement("header",null,N.a.createElement("h1",{className:"ui header"},"CoVid-19 Updates - ",t),N.a.createElement("small",{className:"ui small"},"Site updated: ","March 17, 2020 02:50:22"," AEDT")),N.a.createElement(B,null),"AUS"===t?N.a.createElement(P,{id:t,data:a}):N.a.createElement(F,{id:t,todaySummarys:a.todaySummarys,statistics:a.statistics}),"AUS"!==t&&a.dailyHistorys.length>=5&&N.a.createElement(N.a.Fragment,null,N.a.createElement(Z.a,null),N.a.createElement(A,{id:t,dailyHistorys:a.dailyHistorys,predicts:a.predicts,source:a.source,statistics:a.statistics})),N.a.createElement(Z.a,null),"AUS"!==t&&N.a.createElement(U,{id:t}),N.a.createElement(y.a.DiscussionEmbed,{shortname:"covid-19-wileam-com",config:Me}),N.a.createElement("footer",null,N.a.createElement(_,null)))}var Se=function(){var e=ve?"AUS":"NSW",t=window.location.hash.slice(2);""===t&&(window.location.hash="#/"+e,t=e);var a=Object(s.useState)(t),r=Object(C.a)(a,2),o=r[0],n=r[1],d=["NSW","VIC","QLD","WA","SA","TAS","NT","ACT"];return ve&&d.unshift("AUS"),N.a.createElement(Q.a,null,N.a.createElement("div",{className:"ui container center aligned nav-wrapper"},N.a.createElement(L.a,{link:!0,horizontal:!0},d.map((function(e){return N.a.createElement(L.a.Item,{active:o===e},N.a.createElement(Q.b,{exact:!0,activeClassName:"active",to:e,onClick:function(){return n(e)}},e))})))),N.a.createElement(G.c,null,d.map((function(e){return N.a.createElement(G.a,{path:"".concat("","/").concat(e)},N.a.createElement(Te,{id:e}))}))))};f.a.render(N.a.createElement(Se,null),document.getElementById("root"))}},[[436,1,2]]]);