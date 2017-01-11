app.title = '坐标轴刻度与标签对齐';


option = {
    color: ['#3398DB','#D48265'],
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        bottom: '500px',
        width:'700px',
        height:'120px',
        containLabel: true,
        backgroundColor:'#fff'
    },
    xAxis :
        {
            type : 'category',
            data : [
            '9-12 ~ 9-18',
            '9-19 ~ 9-25',
            '9-26 ~ 10-2',
            '10-3 ~ 10-9',
            '10-7 ~ 10-16',
            '10-17 ~ 10-23',
            '10-24 ~ 10-30',
            '10-31 ~ 11-6',
            '11-7 ~ 11-13',
            '11-14 ~ 11-20',
            '11-21 ~ 11-27',
            '11-28 ~ 12-4',
            ],
            inverse:false,
            boundaryGap : false,
            axisLabel:
            {
                rotate:0,
                textStyle:{
                    fontSize:12,
                    color:'#999',
                    fontWeight:100
                },
                inside:false

            },
            axisLine:
            {
                show:false
            },
            axisTick:
            {
                show:false
            }
        },
    yAxis :
        {
            type : 'value',
            axisLine:
            {
                show:false
            },
            axisLabel:
            {
                textStyle:{
                    color:'#999',
                    fontWeight:100
                }
            },
            axisTick:
            {
                show:false
            },
            splitNumber:2,
            splitLine:
            {
                show:true,
                interval:'auto',
                lineStyle:{
                    color:['#DDD'],
                    width:1,
                    type:'dotted'
                }
            }
        },
    series : [

        {
            type:'line',
            stack:'222',
            symbol:'circle',
            symbolSize:'6',
            showAllSymbol:true,
            areaStyle: {
                normal: {
                    opacity:0.1
                }
            },
            name:'直接访问',
            data:[
                7233,
                6772,
                8765,
                7811,
                7211,
                7655,
                8766,
                9111,
                9201,
                9377,
                9082,
                6722
                ],
            lineStyle:
            {
                normal:
                {
                    width:2
                }
            },
            itemStyle:{
                normal:
                {
                    color:'#3398DB'
                }
            }
        }
    ]
};
