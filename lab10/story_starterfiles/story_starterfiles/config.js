var config = {
    style: 'mapbox://styles/xuanwu07/clo58a1si00hd01pb2xpw4euz',
    accessToken: 'pk.eyJ1IjoieHVhbnd1MDciLCJhIjoiY2xuMXdhN29kMDJqeTJqbDl2ZWMxdHB0ciJ9.OB0_cwfVLHeaeHjL43cY_g',
    showMarkers: true,
    markerColor: '#d12ab5',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
    byline: 'By Xuan Wu',
    footer: 'Source: NYCHA, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'Flood-Risk-chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Public and Affordable Housing Flood Risk',
            image: 'images/2012flood.jpg',
            description: '<p> In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents <a href = "https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page">without power for days or even weeks</a>.New York City Housing Authority public housing developments were affected. <a href="https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf">24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected</a>.</p>',
            location: {
                center: [-74.00279, 40.74386],
                zoom: 11,
                pitch: 15.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Red-Hook-chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'images/redhook.jpg',
            description: 'The city classifies Red Hook Houses as being in flood zone 1,indicating high flood risk.Before Hurricane Sandy in 2012, various city reports had outlined the need for increased flood protection, projecting floods as high as 5 feet during storm surges. NYCHA officials responded that they did not anticipate storm surges that strong.When Hurricane Sandy struck, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides.The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that hurt many residents "health.',
            location: {
                center: [-74.004748, 40.675509],
                zoom: 17,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
       
        
    ]
};
