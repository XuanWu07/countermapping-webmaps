var config = {
    style:  'mapbox://styles/xuanwu07/clpi18owl00az01pg22mhfgh9',
    accessToken: 'pk.eyJ1IjoieHVhbnd1MDciLCJhIjoiY2xuMXdhN29kMDJqeTJqbDl2ZWMxdHB0ciJ9.OB0_cwfVLHeaeHjL43cY_g',
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'From Ashes to Architectural Triumph:Great Chicago Fire and Great Rebuilding',
    subtitle: 'Revisiting the great historic accident and its impact',
    byline: 'By Xuan Wu',
    para1:"The Great Chicago Fire was a conflagration that burned in Chicago during October 8–10, 1871, one of the worst urban fires in the history of the world. For both the city and the residents, the fire was a terrible disaster, bringing huge economic loss and homeless. The fire kept burning over 24 hours in the downtown of Chicago, almost destroying all buildings in downtown. Finally, it was a  pouring rain that saved Chicago from the fire.",
    para2:" After the fire, Chicago started rebuilding instantly, making the city reborn and even more prosperous.  From the present perspective, the Great Chicago Fire is not all bad but provided opportunities for urban development. As author and Chicago historian Neal Samors said, ‘had the fire not occurred, “Chicago would probably have been a much smaller metropolis and not the second largest city in the United States.",
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
                {layer:'burningborder',opacity:1},
                {layer:'0burning',opacity:0},
                {layer:'1burning',opacity:0},
                {layer:'2burning',opacity:0},
                {layer:'3burning',opacity:0},
                {layer:'4burning',opacity:0},
                {layer:'5burning',opacity:0},
                {layer:'preserve',opacity:0},
                
            ],
            onChapterExit: 
            [
                {layer:'burningborder',opacity:1},
                {layer:'0burning',opacity:0},
                {layer:'1burning',opacity:0},
                {layer:'2burning',opacity:0},
                {layer:'3burning',opacity:0},
                {layer:'4burning',opacity:0},
                {layer:'5burning',opacity:0},
                {layer:'preserve',opacity:0},
                
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
                pitch: 0,
                bearing: 0,
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
                {layer:'burningborder',opacity:0},
                {layer:'0burning',opacity:0.5},
                {layer:'1burning',opacity:0},
                {layer:'2burning',opacity:0},
                {layer:'3burning',opacity:0},
                {layer:'4burning',opacity:0},
                {layer:'5burning',opacity:0},
                {layer:'preserve',opacity:0},
            ],
            onChapterExit: 
            [
                {layer:'burningborder',opacity:1},
                {layer:'0burning',opacity:0.5},
                {layer:'1burning',opacity:0},
                {layer:'2burning',opacity:0},
                {layer:'3burning',opacity:0},
                {layer:'4burning',opacity:0},
                {layer:'5burning',opacity:0},
                {layer:'preserve',opacity:0},

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

