/**
 * Created by kvn219 on 3/5/17.
 */
d3.json('data/monthly_injured_2013_present.json', function (data) {
    data = MG.convert.date(data, 'date');


    var marker = [
        {date: new Date('2012-12-31T00:00:00.000Z'), label: "Peak 2012 - Dec"},
        {date: new Date('2013-12-31T00:00:00.000Z'), label: "Peak 2013 - Dec"},
        {date: new Date('2014-12-31T00:00:00.000Z'), label: "Peak 2014 - Dec"},
        {date: new Date('2015-12-31T00:00:00.000Z'), label: "Peak 2015 - Dec "},
        {date: new Date('2016-08-31T00:00:00.000Z'), label: "Peak 2016 - Aug"},
        {date: new Date('2017-12-31T00:00:00.000Z'), label: "Peak 2017 - Jan"}

    ];

    var regions = [
        [new Date('2012-11-01T00:00:00.000Z'), new Date('2013-01-31T00:00:00.000Z')],
        [new Date('2014-11-01T00:00:00.000Z'), new Date('2015-01-31T00:00:00.000Z')],
        [new Date('2016-07-31T00:00:00.000Z'), new Date('2016-09-31T00:00:00.000Z')]
    ];



    MG.data_graphic({
        title: "Monthly # of Pedestrians Injured",
        description: "",
        data: data,
        show_secondary_x_label: true,
        animate_on_load: true,
        area: false,
        width: 700,
        height: 250,
        right: 40,
        max_y: 2000,
        target: '#monthly',
        markers: marker,
        x_accessor: 'date',
        y_accessor: 'value',
        y_extended_ticks: true,
        linked: true,
        regions: [{
            date: regions[2]
        }]
    });
});

d3.json('data/daily_injured_2013_present.json', function (data) {
    data = MG.convert.date(data, 'date');

    var baseline = [{value: 230, label: "228 injured on the most dangerous day in NYC on Jan 23rd - 2017 "}];

    MG.data_graphic({
        title: "Daily # of Pedestrians Injured",
        description: "",
        data: data,
        width: 700,
        height: 250,
        right: 40,
        max_y: 300,
        target: '#daily',
        x_accessor: 'date',
        y_accessor: 'value',
        y_extended_ticks: true,
        baselines: baseline,
        linked: true
    });
});