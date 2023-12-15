var config = {
    style: 'mapbox://styles/xuanwu07/clpj4zoxm00d701p857ec5pfs',
    accessToken: 'pk.eyJ1IjoieHVhbnd1MDciLCJhIjoiY2xuMXdhN29kMDJqeTJqbDl2ZWMxdHB0ciJ9.OB0_cwfVLHeaeHjL43cY_g',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'From Ashes to Architectural Triumph:Great Chicago Fire and Great Rebuilding',
    para1: "The Great Chicago Fire was a conflagration that burned in Chicago during October 8–10, 1871, one of the worst urban fires in the history of the world. For both the city and the residents, the fire was a terrible disaster, bringing huge economic loss and homeless. The fire kept burning over 24 hours in the downtown of Chicago, almost destroying all buildings in downtown. Finally, it was a  pouring rain that saved Chicago from the fire. ",
    para2:"After the fire, Chicago started rebuilding instantly, making the city reborn and even more prosperous.  From the present perspective, the Great Chicago Fire is not all bad but provided opportunities for urban development. As author and Chicago historian Neal Samors said, ‘had the fire not occurred, “Chicago would probably have been a much smaller metropolis and not the second largest city in the United States.’",
    subtitle: 'Revisiting the great historic accident and its impact',
    byline: 'By Xuan Wu',
    footer: 'Source:  source citations',
    chapters: 
       [

         {
            id: 'Chapter1',

            alignment: 'left',
            hidden: false,
            title: 'Burnt Area',
            image: 'images/fire_damage.png',
            description: 'The Great Chicago Fire, the most famous in American history, claimed about 300 lives, destroyed some 17,450 buildings covering almost 3.5 square miles (9 square km), and caused $200 million in damage. Roughly one-third of the city lay in ruins, and an nearly 100,000 people was homeless.',
            location: 
              {
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
                { layer: 'burningborder', opacity: 1 },  
                { layer: '0burning', opacity: 0 },
                { layer: '1burning', opacity: 0 },
                { layer: '2burning', opacity: 0 },
                { layer: '3burning', opacity: 0 },
                { layer: '4burning', opacity: 0 },
                { layer: '5burning', opacity: 0 },
                { layer: 'preserve', opacity: 0 },  
                
              ],
            onChapterExit: 
             [
                { layer: 'burningborder', opacity: 1 },  
                { layer: '0burning', opacity: 0 },
                { layer: '1burning', opacity: 0 },
                { layer: '2burning', opacity: 0 },
                { layer: '3burning', opacity: 0 },
                { layer: '4burning', opacity: 0 },
                { layer: '5burning', opacity: 0 },
                { layer: 'preserve', opacity: 0 }]},
         {
            id: '2stChapter',

            alignment: 'left',
            hidden: false,
            title: 'fuck',
            image: 'images/fire_damage.png',
            description: 'The Great Chicago Fire, the most famous in American history, claimed about 300 lives, destroyed some 17,450 buildings covering almost 3.5 square miles (9 square km), and caused $200 million in damage. Roughly one-third of the city lay in ruins, and an nearly 100,000 people was homeless.',
            location: 
              {
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
                { layer: 'burningborder', opacity: 0 },  
                { layer: '0burning', opacity: 0 },
                { layer: '1burning', opacity: 0 },
                { layer: '2burning', opacity: 0 },
                { layer: '3burning', opacity: 1 },
                { layer: '4burning', opacity: 0 },
                { layer: '5burning', opacity: 0 },
                { layer: 'preserve', opacity: 0 },  
                
              ],
            onChapterExit: 
             [
                { layer: 'burningborder', opacity: 10},  
                { layer: '0burning', opacity: 0 },
                { layer: '1burning', opacity: 0 },
                { layer: '2burning', opacity: 0 },
                { layer: '3burning', opacity: 1 },
                { layer: '4burning', opacity: 0 },
                { layer: '5burning', opacity: 0 },
                { layer: 'preserve', opacity: 0 },  

              ]
 
         } ,


           
    ]
};
