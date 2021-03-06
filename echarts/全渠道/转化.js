app.title = '坐标轴刻度与标签对齐';


option = {
    color: ['#3398DB','#D48265'],
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        bottom: '500px',
        width:'800px',
        height:'200px',
        containLabel: true,
        backgroundColor:'#fff'
    },
    xAxis :
        {
            type : 'category',
            data : [
            '新增',
            '注册',
            '接入数据',
            '接续接入',
            '付费'
            ],
            inverse:false,
            axisLabel:
            {
                rotate:40,
                textStyle:{
                    fontSize:11,
                    color:'#777'
                },
                inside:false,
                interval:0

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
                    color:'#777'
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
            },
            max:100
        },
    series : [

        {
            type:'bar',
            stack:'222',
            symbol:'circle',
            symbolSize:'3',
            showAllSymbol:true,
            name:'直接访问',
            barWidth: '40px',
            data:[100, 70, 50, 20, 8],
            lineStyle:
            {
                normal:
                {
                    width:1
                }
            },
            itemStyle:{
                normal:
                {
                    color:'#3398DB'
                }
            },
            label:{
                normal:{

                }
            }
        }
    ]
};
