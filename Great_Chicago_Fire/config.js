var config = {
    style:  'mapbox://styles/xuanwu07/clpjdyxez00dm01p65k3efumu',
    accessToken: 'pk.eyJ1IjoieHVhbnd1MDciLCJhIjoiY2xuMXdhN29kMDJqeTJqbDl2ZWMxdHB0ciJ9.OB0_cwfVLHeaeHjL43cY_g',
    inset: true,
    theme: 'light',
    projection: 'mercator',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'From Ashes to Architectural Triumph:Great Chicago Fire and Great Rebuilding',
    subtitle: 'Revisiting the great historic accident and its impact',
    byline: 'By Xuan Wu',
    para1:"The Great Chicago Fire was a conflagration that burned in Chicago during October 8–10, 1871, one of the worst urban fires in the history of the world. For both the city and the residents, the fire was a terrible disaster, bringing huge economic loss and homeless. The fire kept burning over 24 hours in the downtown of Chicago, almost destroying all buildings in downtown. Finally, it was a  pouring rain that saved Chicago from the fire. ",
    para2:"After the fire, Chicago started rebuilding instantly, making the city reborn and even more prosperous.  From the present perspective, the Great Chicago Fire is not all bad but provided opportunities for urban development. As author and Chicago historian Neal Samors said, ‘had the fire not occurred, “Chicago would probably have been a much smaller metropolis and not the second largest city in the United States.’",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: 
      [
        {
            id: 'chapter1',
            alignment: 'left',
            hidden: false,
            title: 'Burnt Area',
            image: 'images/fire_damage.png',
            description: 'The Great Chicago Fire, the most famous in American history, claimed about 300 lives, destroyed some 17,450 buildings covering almost 3.5 square miles (9 square km), and caused $200 million in damage. Roughly one-third of the city lay in ruins, and an nearly 100,000 people was homeless.',
            location: {
                center: [-87.62803, 41.89321],
                zoom: 12.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                    {  layer: 'burningborder', opacity: 1},
                    {  layer: '0burning', opacity: 0},
                    {  layer: '1burning', opacity: 0},
                    
            ],
            onChapterExit: 
            [       {  layer: 'burningborder', opacity: 1},
                    {  layer: '0burning', opacity: 0},
                    {  layer: '1burning', opacity: 0},
                    
                    
            ]
        },
        {
            id: 'chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Pre Fire: Night October 7',
            description: 'The Saturday Night Fire of October 7 was an omen of the Great Chicago Fire. It happened in the southwest neighborhood, known as “Red Flash" because of the combustibility of the local buildings and their contents.  The Saturday Night Fire left Chicago‘s already undermanned and underequipped firefighters critically shorthanded and overtired, and some of their equipment badly damaged.',
            location: {
               center: [-87.62803, 41.89321],
                zoom: 12.5,
                pitch: 60,
                bearing: 30
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0},
                   
            ],
            onChapterExit: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0},
                    
            ]
        },
        {
            id: 'chapter3',
            alignment: 'right',
            hidden: false,
            title: 'Origin ：Evening October 8 ',
            image: 'images/cow.jpg',
            description: 'The fire is claimed to have started at about 8:30 p.m. on October 8, in or around a small barn belonging to the O’Leary family.  It was widely rumored that Mrs. O’Leary‘s cow kicked over a lantern and started the fire. However, the journalist who reported the story later admitted that he had made up the story and the court declared that Mrs. O‘Leary was not the cause of the fire. The creation and widespread circulation of this story was related to racial discrimination against the Irish and religious strife against the Catholic Church at the time, with others transferring their anger over the fire to the pagans and the Irish.',
            location: {
               center: [-87.62803, 41.89321],
                zoom: 12.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0},
                    {  layer: '4burning', opacity: 0},
                    {  layer: '3burning', opacity: 0},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 0},
            ],
            onChapterExit: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0},
                    {  layer: '4burning', opacity: 0},
                    {  layer: '3burning', opacity: 0},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 0},
            ]
        },
        {
            id: 'chapter4',
            alignment: 'left',
            hidden: false,
            title: 'Cross South River: Midnight October 9',
            image: 'images/cross_river.jpg',
            description: 'Firefighters had hoped that the South Branch of the Chicago River and an area that had previously thoroughly burned would act as a natural firebreak.All along the river, however, were lumber yards, warehouses, and coal yards, and barges and numerous bridges across the river. As the fire grew, the southwest wind intensified and became superheated, causing structures to catch fire from the heat and from burning debris blown by the wind. Around midnight, flaming debris blew across the river and landed on roofs and the South Side Gas Works.',
            location: {
               center: [-87.62803, 41.89321],
                zoom: 12.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0.5},
                    {  layer: '4burning', opacity: 0},
                    {  layer: '3burning', opacity: 0},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 0},
            ],
            onChapterExit: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0.5},
                    {  layer: '4burning', opacity: 0},
                    {  layer: '3burning', opacity: 0},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 0},
            ]
        },
        {
            id: 'chapter5',
            alignment: 'right',
            hidden: false,
            title: 'Expand : Morning October 9',
            image: 'images/fire_whirl.jpg',
            description: 'A major contributing factor to the fire’s spread was a meteorological phenomenon known as a fire whirl.As overheated air rises, it comes into contact with cooler air and begins to spin, creating a tornado-like effect. These fire whirls are likely what drove flaming debris so high and so far. Such debris was blown across the main branch of the Chicago River to a railroad car carrying kerosene.The fire had jumped the river a second time and was now raging across the city‘s north side.',
            location: {
               center: [-87.62803, 41.89321],
                zoom: 12.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0.5},
                    {  layer: '4burning', opacity: 0.5},
                    {  layer: '3burning', opacity: 0},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 0},
            ],
            onChapterExit: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0.5},
                    {  layer: '4burning', opacity: 0.5},
                    {  layer: '3burning', opacity: 0},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 0},
            ]
        },
        {
            id: 'chapter6',
            alignment: 'left',
            hidden: false,
            title: 'Go North: Afternoon October 9',
            description: 'A short time after the fire jumped the river, a burning piece of timber lodged on the roof of the city’s waterworks. Within minutes, the interior of the building was engulfed in flames and the building was destroyed. With it, the city‘s water mains went dry and the city was helpless.The fire had spread to the sparsely populated areas of the north side, having thoroughly consumed the densely populated areas.',
            location: {
               center: [-87.62803, 41.89321],
                zoom: 12.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0.5},
                    {  layer: '4burning', opacity: 0.5},
                    {  layer: '3burning', opacity: 0.5},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 0},
            ],
            onChapterExit: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0.5},
                    {  layer: '4burning', opacity: 0.5},
                    {  layer: '3burning', opacity: 0.5},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 0},
            ]
        },
        {
            id: 'chapter7',
            alignment: 'right',
            hidden: false,
            title: 'End : Morning October 10',
            image: 'images/end.jpg',
            description: 'Only rainfall, the lake, and stretches of unbuilt lots on the North Side finally halted the wave of destruction on the morning of October 10.',
            location: {
               center: [-87.62803, 41.89321],
                zoom: 12.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0.5},
                    {  layer: '4burning', opacity: 0.5},
                    {  layer: '3burning', opacity: 0.5},
                    {  layer: '5burning', opacity: 0.5},
                    {  layer: 'preserve', opacity: 0},
            ],
            onChapterExit: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0.5},
                    {  layer: '1burning', opacity: 0.5},
                    {  layer: '2burning', opacity: 0.5},
                    {  layer: '4burning', opacity: 0.5},
                    {  layer: '3burning', opacity: 0.5},
                    {  layer: '5burning', opacity: 0.5},
                    {  layer: 'preserve', opacity: 0},
            ]
        },
        {
            id: 'chapter8',
            alignment: 'center',
            hidden: false,
            title: 'Survived Buildings',
            description: 'The Great Chicago Fire almost destroyed all buildings in the downtown of Chicago,  but a few have survived and even remain now as important historic preservation sites that hold the city’s spirits and memories.',
            location: {
                center: [-87.63239, 41.88130],
                zoom: 19.01,
                pitch: 85.00,
                bearing: 54.40
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0},
                    {  layer: '1burning', opacity: 0},
                    {  layer: '2burning', opacity: 0},
                    {  layer: '4burning', opacity: 0},
                    {  layer: '3burning', opacity: 0},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 1},
            ],
            onChapterExit: 
            [
                    {  layer: 'burningborder', opacity: 0},
                    {  layer: '0burning', opacity: 0},
                    {  layer: '1burning', opacity: 0},
                    {  layer: '2burning', opacity: 0},
                    {  layer: '4burning', opacity: 0},
                    {  layer: '3burning', opacity: 0},
                    {  layer: '5burning', opacity: 0},
                    {  layer: 'preserve', opacity: 1},
            ]
        },






        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            location: {
            center: [-73.97615, 40.71901],
            zoom: 14.84,
            pitch: 48,
            bearing: 142.44,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            video: 'images/New_York.mp4',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};

