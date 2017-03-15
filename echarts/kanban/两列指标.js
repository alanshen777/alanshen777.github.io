app.title = '坐标轴刻度与标签对齐';




option = {
    color: ['#3398DB','#F7CD72', '#9ECA68', '#F29C9F', '#8f82bc'],
    tooltip : {
        trigger: 'axis'
    },
    legend:
    {
        show:true,
        zlevel:100,
        data:['www.baidu.com', 'www.google.com', 'www.pmcaff.com','www.zhihu.com','www.zhugeio.com'],
        textStyle:
        {
            color:'#666'
        },
        right:1,
        itemWidth:5,
        padding:0,
        itemHeight:10,
        width:320
    },
    grid: {
        bottom: '500px',
        width:'700px',
        height:'200px',
        containLabel: true,
        backgroundColor:'#FFF'
    },
    xAxis : [
        {
            type : 'category',
            data : [
'10-1',
'10-2',
'10-3',
'10-4',
'10-5',
'10-6',
'10-7',
'10-8',
'10-9',
'10-10',
'10-11',
'10-12',
'10-13',
'10-14',
'10-15',
'10-16',
'10-17',
'10-18',
'10-19',
'10-20',
'10-21',
'10-22',
'10-23',
'10-24',
'10-25',
'10-26',
'10-27',
'10-28',
'10-29',
'10-30',
'10-31'

                  ],
            axisLabel:
            {
                rotate:0,
                textStyle:{
                    fontSize:12,
                    color:'#666'
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
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:
            {
                show:false
            },
            axisLabel:
            {
                textStyle:{
                    color:'#666'
                },
                formatter:'{value}%'
            },
            axisTick:
            {
                show:false
            },
            splitNumber:3,
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
        }
    ],
    series : [
        {
            type:'line',
            symbol:'circle',
            symbolSize:'5',
            showAllSymbol:true,
            name:'www.baidu.com',
            barWidth: '60%',
            data:[30, 32, 34, 38],
            lineStyle:
            {
                normal:
                {
                    width:1
                }
            }
        }
    ]
};
