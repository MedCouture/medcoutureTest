$(document).ready(function () {
    //if url pathname is indexOf an array then 
    //hook into a view and generate a view
    let url = window.location.pathname;
    let path = url.split('/');

    let fileIndex = path.length-1;
    let file = path[fileIndex];

    let styleIndex = file.split('.');
    let style = styleIndex[0];
    console.log(style);

    let styles = [
        {
            style: 8407,
            name: 'Zip Neck Top',
            description:'This visionary henley neck scrub top features a sleek zipper neckline, relaxed silhouette, and available in basic and fashion colors.',
            kind: 'solids',
            features:['Henley Neck','Chic Zipper','Two chest patch pockets','R: XS-3X (27”)'],
            swatches:['ROYL','PWTR','NAVY','GELO','CLOD','BLAC'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8757,
            name: 'MERROW WAIST PANT',
            description:'These dreamy scrub pants feature a playful waist detail, sleek silhouette, four pockets, and outer ties at the waist.',
            kind: 'bottoms',
            features:['Straight leg ','Decorative waistband','Outter waist ties','Single cargo pocket','R: XS-5X (30.5”) P XS-2X (28.5”) T: XS-XL (33”)'],
            swatches:['ROYL','PWTR','NAVY','GELO','CLOD','BLAC'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8470,
            name: 'RAGLAN TOP',
            description:'Med Couture has gone super sporty with this minimalistic V-neck top. Beautiful rib knit accents punctuate a flattering silhouette.',
            kind: 'solids',
            features:['Classic V neck','Two large welt pockets','Rib-knit detail','Side snap embellishment','R: XS-5X (26.5”)'],
            swatches:['ROYL','PWTR','NAVY','GELO','CLOD','BLAC'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8721,
            name: 'SEAMED JOGGER',
            description:'Level up your scrub game with these sleek joggers. An elastic waistband with an outer drawcord lets you adjust the fit. The elastic cuffs feel comfortable and relaxed.',
            kind: 'bottoms',
            features:['Adjustable front waist ties','Two cargo pockets','Jersey waistband and ankle cuffs','R: XS-3X (28.5”) P: XS-XL (26.5”) T: XS-XL (31”)'],
            swatches:['ROYL','PWTR','NAVY','GELO','CLOD','BLAC'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7479,
            name: 'HENLEY TOP',
            description:'Med Couture truly channeled up awesomeness with this henley scrub top. You’ll rock this relaxed fit style in comfort all day long. You can tuck it in or leave it out!',
            kind: 'solids',
            features:['Henley neck','Chest patch pocket','Back yoke with box pleat','Inside contrast neckband','R: XS-2X (26”)'],
            swatches:['BLAC','BLUH','NAVY','SLAT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7789,
            name: 'YOGA 1 CARGO POCKET PANT',
            description:'Simple in design, this strait leg scrub pant has rib-knit accents at the waistband and pockets. The fabric and fit are unbelievably comfortable.',
            kind: 'bottoms',
            features:['Straight leg with side vents','Rib knit waist and pocket lining','1 cargo pocket','Two back patch pockets','R: XS-3X (31”) P XS-XL (29”) T XS-XL (33”)'],
            swatches:['BLAC','BLUH','NAVY','ROYL','SLAT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7472,
            name: 'MOCK WRAP TOP',
            description:"You'll love this mock wrap scrub top. With a relaxed silhouette, this v-neck top has large pockets, an accessory loop, and princess seams in the back.",
            kind: 'solids',
            features:['Mock wrap v-neckline','Double-layered angled pockets','Accessory loop','Inside contrast neckband','Back princess seams','R: XS-3X (26”)'],
            swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7710,
            name: 'JOGGER YOGA PANT',
            description:"Med Couture jogger pants elevate a closet staple with an extra comfortable feel. Made from a poly blend that feels like cotton, they feature rib knit waistband and ankle cuffs.",
            kind: 'bottoms',
            features:['Single cargo pocket','Rib knit waistband and ankle cuffs','Adjustable front waist ties','Accessory loop','Two back patch pockets','R: XS-3X (28 1/2”) P XS-XL (26 1/2”) T XS-XL (31”)'],
            swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7459,
            name: 'V-NECK SHIRTTAIL TOP',
            description:"This classic is an industry favorite. It’s practical v-neck design and perfectly proportioned knit side panels bring style to your everyday wardrobe.",
            kind: 'solids',
            features:['Overlapping rib knit side panels','Accessory loop','Extra accessory pocket and pen slot','Two large patch pockets','Two back patch pockets',' Inside contrast neckband','R: XS-5X (27”)'],
            swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7739,
            name: 'YOGA 2 CARGO POCKET PANT',
            description:"These lightweight strait leg scrub pants have a comfy wide waistband with internal ties. Designed for a clean, smooth fit with exceptional comfort.",
            kind: 'bottoms',
            features:['Straight leg with side vents','Jacquard elastic and rib knit waistband','Internal waist ties','Two cargo, two back patch ','Two back patch pockets','Extra accessory pocket','Accessory loop','R: XS-5X (31”) P XS-2X (29”) T XS-XL (33”)'],
            swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`
                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8579,
            name: 'RACERBACK SHIRTTAIL TOP',
            description:"This scrub top offers you a comfy and breathable fit. A v-neckline and a fun racerback design make for a classic sporty look.",
            kind: 'solids',
            features:['Racerback knit panel','Front and back princess seams','Two large patch pockets','Welt accessory pocket','R: XS-5X (front 27” back 26”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8744,
            name: 'YOGA 2 CARGO POCKET PANT',
            description:"Designed for comfort and built to perform on the job and beyond! This yoga style scrub pant offers a comfortable drawstring waistband and two cargo pockets.",
            kind: 'bottoms',
            features:['Boot cut leg with side vents','Sporty yoga knit waistband','Internal waist ties','Two welt cargo pockets','Two back patch pockets','R: XS-5X (31”) | P: XS-2X (29”) | T: XS-2X (33”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8587,
            name: 'V-NECK 3 POCKET TOP',
            description:"This v-neck scrub top feels sporty while exhibiting a traditional appeal. Crafted from a sleek and lightweight fabric, includes a chest pocket for expanded storage.",
            kind: 'solids',
            features:['Chest patch pocket','Two large welt pockets','R: XS-3X ( 26”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8719,
            name: '1 CARGO POCKET PANT',
            description:'From fulfilling all your heroic duties to enjoying a relaxing cup of coffee, these straight leg scrub pants are essential for keeping you comfortable during any activity.',
            kind: 'bottoms',
            features:['Straight leg with side vents','Back elastic waistband','Adjustable front waist ties','Single cargo pocket','Single back patch pocket','R: XS-3X ( 31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','CRAL','EGPL','GLXY','HNTR','NAVY','PLUM','PWTR','REDD','ROYL','TEAL','TURQ','WINE','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8416,
            name: 'V-NECK RACERBACK TOP',
            description:'This v-neck scrub top gives you the lightweight, breathable coverage you want. A classic silhouette and ample pocket space makes this piece a staple!',
            kind: 'solids',
            features:['Back knit racerback panel','Shoulder yokes','Two large patch pockets','Extra accessory pockets','Hidden side seam pockets','R: XS-3X (26”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8408,
            name: 'V-NECK PRINCESS SEAM TOP',
            description:'This v-neck scrub top gives you the lightweight, breathable coverage you want. A classic silhouette and ample pocket space makes this piece a staple!',
            kind: 'solids',
            features:['Shoulder princess seams','Two large patch pockets','Extra accessory pockets','Snap closure','R: XS-3X (26”)'],
            swatches:['BLAC','CARI','CEIL','GLXY','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','ROYL','TEAL','SKYB','SPMN','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8758,
            name: 'YOGA 2 CARGO POCKET PANT',
            description:'Take your daily adventure in stride in these sporty scrub pants, ideal for work and leisure. These pants have a comfortable jacquard elastic and knit waistband.',
            kind: 'bottoms',
            features:['Boot cut leg with side vents','Jacquard elastic and knit waistband','Two cargo pockets','Single back patch pocket','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8747,
            name: 'YOGA 1 CARGO POCKET PANT',
            description:'This simple scrub pant feels extremely durable and has great shape retention. A stretchy knit waistband and an external drawstring adjusts perfectly flatter any figure.',
            kind: 'bottoms',
            features:['Roomy straight leg','Stretchy knit waistband','Single cargo zipper pocket','Single back patch pocket','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8459,
            name: 'MATERNITY TOP',
            description:'You must experience our maternity scrub top. Crafted from smooth, stretchy fabric, it retains its shape wash after wash. The versatile style ensures a perfect fit.',
            kind: 'solids',
            features:['Comfortable side knit panels','Adjustable bungee with toggle','Two large patch pockets','Classic v-neckline','R: XS-3X (27”)'],
            swatches:['BLAC','NAVY','PWTR','ROYL','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8727,
            name: 'MATERNITY PANT',
            description:'These athletic inspired scrub pants are sporty and stretchy. You’ll want to live in these 24/7 with the comfortable knit waist panel.',
            kind: 'bottoms',
            features:['Boot cut leg with side vents','Comfortable knit waist pane','Single cargo pocket','Single back welt pocket','R: XS-3X (30”) | P: XS-XL (29”)'],
            swatches:['BLAC','NAVY','PWTR','ROYL','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8458,
            name: 'V-NECK KNIT PANEL TOP',
            description:'This faithful scrub top features a sporty back knit panel, flattering V-neck and a hi-low silhouette. Pair it with your favorite under scrub. It will be your new go-to top!',
            kind: 'solids',
            features:['Sporty back knit panel','Two large patch pockets','Extra accessory pockets','Contrast back neck binding','R: XS-3X ( 26”)'],
            swatches:['BISR','BKRS','BLBC','CCAR','CLNY','LPTQ','MGTL','NNAT','NNSP','RTSG','RYPS','SPNN','STAP','STCC','TQLP'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8715,
            name: 'YOGA DRAWSTRING PANT',
            description:'This yoga scrub pant features a classic straight leg silhouette and a comfortable knit yoga waistband. We also included extra pocket space to keep everything on you! ',
            kind: 'bottoms',
            features:['Straight leg','Knit waistband and yoke','Adjustable front waist ties','Two back patch pockets','Contrast details','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BISR','BKRS','BLBC','CCAR','CLNY','LPTQ','MGTL','NNAT','NNSP','RTSG','RYPS','SPNN','STAP','STCC','TQLP'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8496,
            name: 'V-NECK 3 POCKET TOP',
            description:'Ample storage space and a simple silhouette create an essential wardrobe piece with this scrub top. Perfect for layering and pairs nicely with any Signature pant.',
            kind: 'solids',
            features:['Classic v-neckline','Chest pocket with bungee loop','Two large patch pockets','Two back patch pockets','Extra pen slot accessory pocket','Embroidered logo on pocket band','R: XS-3X ( 26”)'],
            swatches:['BLAC','CEIL','GLXY','NAVY','PKLC','PLUM','PWTR','REDD','ROYL','STEL','WHIT','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8741,
            name: 'V-NECK 3 POCKET TOP',
            description:'This classic boot cut scrub pant is fun. Five spacious pockets and adjustable ties make for a stylish, functional pant that will fit perfectly with the rest of your wardrobe.',
            kind: 'bottoms',
            features:['Boot cut leg','Full elastic waistband','Adjustable front waist ties','Two cargo pockets','Extra pen slot pocket','Single back patch pocket','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BLAC','CEIL','GLXY','NAVY','PKLC','PLUM','PWTR','REDD','ROYL','STEL','WHIT','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8489,
            name: 'SPORT NECKLINE TOP',
            description:'The sport neckline of this scrub top adds a dash of character to this classic scrub top. It has ample pockets; you’ll be able to carry around everything you need.',
            kind: 'solids',
            features:['Sport neckline with yoke','Two large patch pockets','Extra accessory/pen pocket','Embroidered logo on pocket','Extra pen slot pocket','R: XS-3X ( 26”)'],
            swatches:['BLAC','CEIL','GLXY','NAVY','PKLC','PLUM','PWTR','REDD','ROYL','STEL','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8403,
            name: 'V-NECK SIGNATURE 3 POCKET TOP',
            description:'Classics never go out of style. This fun scrub top is a simple, yet has a flattering silhouette, welt pockets, and a contrast back neck panel.',
            kind: 'solids',
            features:['Two angled welt pockets','Hidden inside accessory pockets','Chest pocket with bungee loop','Contrast back neckband','R: XS-3X ( 26”)'],
            swatches:['BISR','BKRS','BLAC','BLBC','CBTP','CCAR','CLNY','HUCC','LPTQ','MGTL','NNAT','NNSP','NNVY','PLLC','RDPW','RTSG','RYPS','SPNN','STAP','STCC','TQLP','WNPP'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8705,
            name: 'SIGNATURE DRAWSTRING PANT',
            description:'A simple, yet flattering silhouette, assessable side seam pockets, hidden cell phone pocket, and sturdy external waist ties make for a great go-to pant.',
            kind: 'bottoms',
            features:['Straight leg with side vents','Back elastic waistband','Adjustable front waist ties','Hidden inside cell phone holder','Single back patch pocket','Contrast details','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
            swatches:['BISR','BKRS','BLAC','BLBC','CBTP','CCAR','CLNY','HUCC','LPTQ','MGTL','NNAT','NNSP','NNVY','PLLC','RDPW','RTSG','RYPS','SPNN','STAP','STCC','TQLP','WNPP'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8499,
            name: 'PERFORMANCE KNIT TEE',
            description:'This under-scrub tee is the first layer you put on for pure comfort. The fabric is soft and smooth. Available in a wide array of colors.',
            kind: 'layering',
            features:['95% polyester, 5% spandex','Cover stitch scoop neckline','Slimming side seam panels','Back yoke for added fit','R: XS-3X (26”)'],
            swatches:['APPL','AQMA','ARBL','BLAC','CEIL','CHAR','CTNC','LOLI','MGNT','NAVY','PACI','PKPH','PLUM','PPHZ','PWTR','RASP','RHUB','RLTL','ROYL','SKYB','SPMN','TURQ','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8638,
            name: 'ZIP FRONT WARM UP',
            description:'need description',
            kind: 'layering',
            features:['95% polyester, 5% spandex','Long sleeves with rib knit cuffs','Zip front closure','Faux kangaroo pouch pockets','Front and back princess seams','R: XS-3X (27”)'],
            swatches:['BLAC','CEIL','GLXY','NAVY','PWTR','ROYL','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8684,
            name: 'PERFORMANCE FLEECE JACKET',
            description:'',
            kind: 'outerwear',
            features:['100% polyester','Zipper pull functions as hair tie','Two front in-seam welt pockets','Two hidden inside pockets','Back logo reflector','R: XS-3X (26”)'],
            swatches:['BLAC','CEIL','KHAK','NAVY','OLIV','PKPH','PWTR','ROYL','WHIT','WINE'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 7663,
            name: 'ZIP FRONT WARM UP',
            description:'',
            kind: 'layering',
            features:['77% polyester, 20% rayon 3% spandex','Rib knit collar and cuffs','Large curved pockets','Angled shoulder yoke seams','Back princess seams and yoke','R: XS-3X (28”)'],
            swatches:['BLAC','NAVY','OLIV','PWTR'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8687,
            name: 'ZIP FRONT WARM UP',
            description:'',
            kind: 'layering',
            features:['55% cotton, 42% polyester,3% spandex','Two large patch pockets','Hidden side seam pockets','Zip front closure','R: XS-3X (27”)'],
            swatches:['BLAC','NAVY'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8690,
            name: 'PERFORMANCE FLEECE VEST',
            description:'',
            kind: 'layering',
            features:['100% polyester','Zipper pull functions as hair tie','Two front in-seam welt pockets','Two hidden inside pockets','Back logo reflector','R: XS-3X (24”)'],
            swatches:['BLAC','NAVY','ROYL','WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8486,
            name: 'SIGNATURE 1 POCKET TOP',
            description:'A sport v-neck and straight sleeve stitch bring an edge to our men’s sport scrub top. With only a simple chest pocket, you can tuck it in or leave it out!',
            kind: 'solids',
            features:['Tuck in or leave out','Chest pocket with bungee loop','Contrast details','R: XS-3X (29”)'],
            swatches:['BLAC','CEIL','NAVY','ROYL','STEL'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8688,
            name: 'PERFORMANCE FLEECE JACKET',
            description:'Stay warm on those cold office days. With hidden inside pockets and a sporty open collar, this jacket has a classic appeal.',
            kind: 'outerwear',
            features:['100% polyester','Two front in-seam welt pockets','Two hidden inside pockets','Sport collar','R: XS-3X (29”)'],
            swatches:['BLAC','NAVY'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8471,
            name: 'SIGNATURE 3 POCKET TOP',
            description:'Simple pockets and contrast color details make for a classic and refined scrub top. With the addition of velcro closure on the chest pocket and a contrast bungee loop, the details speak for themselves.',
            kind: 'solids',
            features:['Two large welt pockets','Welt chest pocket','Bungee loop','Contrast details','R: XS-3X (29”)'],
            swatches:['BLAC','CARI','CEIL','NAVY','ROYL','STEL','TEAL'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8702,
            name: 'SIGNATURE 2 CARGO PANT',
            description:'Do you like pockets? These scrub pants have five. Internal hidden waist ties and a functional fly zipper ensure that these cargos are comfortable and practical.',
            kind: 'bottoms',
            features:['Straight leg','Full elastic waistband','Internal waist ties','Functional fly zipper','Two cargo pockets','Single back patch pocket','R: XS-3X (31”) | T: XS- 3X (33”)'],
            swatches:['BLAC','CARI','CEIL','NAVY','ROYL','STEL','TEAL'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8530,
            name: 'ACTIVATE PERFORMANCE 1 POCKET TOP',
            description:'A sport v-neck and straight sleeve stitch bring an edge to our men’s sport scrub top. With only a simple chest pocket, you can tuck it in or leave it out!',
            kind: 'solids',
            features:['Tuck in or leave out','Chest pocket with bungee loop','Sleeve detail','R: XS-3X (29”)'],
            swatches:['BLAC','CEIL','NAVY','PWTR','ROYL'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8734,
            name: 'ACTIVATE PERFORMANCE 2 CARGO PANT',
            description:'Do you like pockets? These scrub pants have five. Internal hidden waist ties and a functional fly zipper ensure that these cargos are comfortable and practical.',
            kind: 'bottoms',
            features:['Modern fit tapered leg','Full elastic waistband','Internal waist ties','Functional fly zipper','Two cargo pockets','Single back patch pocket','R: XS-3X (31”) | T: XS-3X (33”)'],
            swatches:['BLAC','CEIL','NAVY','PWTR','ROYL'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8528,
            name: 'ACTIVATE PERFORMANCE 4 POCKET TOP',
            description:'Curved sleeve stitch details and a total of 4 pockets bring this men’s scrub top to the next level. The tailored back yoke provides an exact fit.',
            kind: 'solids',
            features:['Two large patch pockets','Extra accessory pocket','Chest pocket with bungee loop','R: XS-3X (30”)'],
            swatches:['BLAC','CEIL','NAVY','PWTR','ROYL'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8522,
            name: 'PERFORMANCE KNIT TEE',
            description:'This striped under-scrub tee is the first layer you put on for pure comfort. The fabric is soft and smooth. Available in a wide array of colors.',
            kind: 'layering',
            features:['95% polyester, 5% spandex','Cover stitch scoop neckline','Slimming side seam panels','Back yoke for added fit','R: XS-3X (26”)'],
            swatches:['BKSW','BKWH','NVLP','NVWH','PWTQ'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 9652,
            name: 'TAILORED EMPIRE MID LENGTH LAB COAT',
            description:"Meticulously tailored, this lab coat will keep you looking sharp. With anti-microbial and stain-resistant herringbone fabric, you'll want to live in this white lab coat.",
            kind: 'labcoats',
            features:['Two large patch pockets','Welt chest pocket','Button front closure','Back yoke and hem vent','Length: 32”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 9657,
            name: 'TAILORED EMPIRE LONG LENGTH LAB COAT',
            description:"Meticulously tailored, this lab coat will keep you looking sharp. With anti-microbial and stain-resistant herringbone fabric, you'll want to live in this white lab coat.",
            kind: 'labcoats',
            features:['Two large patch pockets','Welt chest pocket','Button front closure','Back yoke and hem vent','Length: 36”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 9644,
            name: 'TAILORED MID LENGTH LAB COAT',
            description:"Meticulously tailored, this lab coat will keep you looking sharp. With anti-microbial and stain-resistant herringbone fabric, you'll want to live in this white lab coat.",
            kind: 'labcoats',
            features:['Two large angled patch pockets','Squared front princess seams','Button front closure','Back hem vent','Length: 33”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 9632,
            name: 'TAILORED LONG LENGTH LAB COAT',
            description:"Meticulously tailored, this lab coat will keep you looking sharp. With anti-microbial and stain-resistant herringbone fabric, you'll want to live in this white lab coat.",
            kind: 'labcoats',
            features:['Two large angled patch pockets','Squared front princess seams','Button front closure','Back hem vent','Length: 36”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 9680,
            name: "MEN'S TAILORED LONG LENGTH LAB COAT",
            description:"Meticulously tailored, this lab coat will keep you looking sharp. With anti-microbial and stain-resistant herringbone fabric, you'll want to live in this white lab coat.",
            kind: 'labcoats',
            features:['Men’s sizes: 38-52','Two large welt pockets','Additional welt chest pocket','Button front closure','Tailored seam detail','Length: 38”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 3048,
            name: "MEN’S CLASSIC LONG LENGTH LAB COAT",
            description:'The tailored details and simple pockets of this men’s doctor reflect the classic style. The addition of a back hem vent and open side access slits ensures function and fit.',
            kind: 'labcoats',
            features:['POLY COTTON TWILL','80% polyester/20% cotton','Two large patch pockets','Chest patch pocket with pen slot',' Hidden inside pockets','Open side access slits','Sewn down full back band','Size 36-52','Length: 38”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8660,
            name: "3 POCKET SHORT LENGTH LAB COAT",
            description:'The tailored details and simple pockets of this women’s doctor reflect the classic style. The addition of a back hem vent and open side access slits ensures function and fit.',
            kind: 'labcoats',
            features:['POLY COTTON TWILL','80% polyester/20% cotton','Two large patch pockets','Chest patch pocket','Button front closure','Back pleated detail','Waist-cinching back band with button tab','Size XS-3X','Length: 30”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8617,
            name: "3 POCKET SHORT LENGTH LAEMPIRE BELTED MID LENGTH LAB COATB COAT",
            description:'The tailored details and simple pockets of this women’s doctor reflect the classic style. The addition of a back hem vent and open side access slits ensures function and fit.',
            kind: 'labcoats',
            features:['POLY COTTON TWILL','80% polyester/20% cotton','Two large patch pockets','Feminine empire waistband','Front and back princess seams with bust darts','Button front closure','Waist-cinching back band with button tab detail','Size 4-20','Length: 33”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 9618,
            name: "CONSULTATION LENGTH LAB COAT",
            description:'The tailored details and simple pockets of this women’s doctor reflect the classic style. The addition of a back hem vent and open side access slits ensures function and fit.',
            kind: 'labcoats',
            features:['POLY COTTON POPLIN','65% polyester/35% cotton','Two large slanted pockets','3/4 length sleeves','Button front closure','Back pleated detail','Waist-cinching back band detail','Size XS-3X','Length: 28”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 5601,
            name: "EMPIRE MID LENGTH LAB COAT",
            description:'The tailored details and simple pockets of this women’s doctor reflect the classic style. The addition of a back hem vent and open side access slits ensures function and fit.',
            kind: 'labcoats',
            features:['POLY RAYON STRETCH','63% polyester/34% rayon/3% spandex','Two large rounded patch pockets','Feminine empire waistband','Front and back princess seams','Button front closure','Waist-cinching sewn down back band','Size XS-2XL','Length: 33”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8692,
            name: "BELTED BACK MID LENGTH LAB COAT",
            description:'The tailored details and simple pockets of this women’s doctor reflect the classic style. The addition of a back hem vent and open side access slits ensures function and fit.',
            kind: 'labcoats',
            features:['POLY RAYON STRETCH','63% polyester/ 34% rayon/3% spandex','Two large patch pockets','Front darts & back princess seams','Additional accessory pocket','Open side access slits','Waist-cinching back band detail','Size XXS-2X','Length: 34”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style: 8608,
            name: "3 POCKET LONG LENGTH LAB COAT",
            description:'The tailored details and simple pockets of this women’s doctor reflect the classic style. The addition of a back hem vent and open side access slits ensures function and fit.',
            kind: 'labcoats',
            features:['POLY RAYON STRETCH','63% polyester/ 34% rayon/3% spandex','Two large patch pockets','Chest pocket with pen slot','Open side access slits','Waist-cinching sewn down back band detail','Size XS-3X','Length: 37”'],
            swatches:['WHIT'],
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                    `)
                }
            },
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            }
        },
        {
            style:'8564gafl',
            name:'GARDEN FLORAL',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['BLAC','NAVY','ROYL'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564diam',
            name:'DIAMOND DAZE',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['PKPH','RLTL','ROYL'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564brme',
            name:'BRIGHT MEDALLION',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['BLAC','PKPH','TURQ'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564geot',
            name:'GEO TILE',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['BLAC','WHIT'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564flit',
            name:'UNICORN',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['NAVY','TURQ','WHIT'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564infl',
            name:'INDIGO FLORAL',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['BLAC','CEIL','NAVY'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564happ',
            name:'HAPPY HEART',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['PWTR','WHIT','REDD'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564palm',
            name:'TROPICAL PALM',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['HNTR','NAVY','OLIV'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564lvll',
            name:'LOVABLE LLAMAS',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['BLAC','NAVY','PKPH'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564ming',
            name:'FANCY FLAMINGO',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['NAVY','PKPH'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564raib',
            name:'RAINBOW MAGIC',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['PWTR','PKPH','WHIT'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
        {
            style:'8564sprg',
            name:'SPRING FLORAL',
            description:'Show off your style and come alive with seasonal prints. We work with top print designers to offer unique and genuinely custom scrub tops!',
            kind:'prints',
            features:['Seasonal prints','Perfect for layers','Super soft fabric','R: XS-3X ( 26”)'],
            swatches:['GELO','NAVY','ROYL'],
            listFeatures: function(){
                console.log(this.features)
                for (let i = 0; i < this.features.length; i++){
                    let feature = this.features[i];
                    $('#features').append(
                        `<li>${feature}</li>`
                    )
                }
            },
            appendSwatches: function(){
                for (let i = 0; i < this.swatches.length; i++){
                    let swatches = this.swatches[i];
                    $('#swatches').append(`

                        <button class='${swatches} ml-2' data-color='${swatches}'></button>

                    `)
                }
            },
        },
    ];

    let generateItemsHtml = function() {
        for (let i=0; i < styles.length; i++){
            if (style == styles[i].style){
                if (styles[i].kind === 'labcoats'){
                    $('#view').html(`
                    <div class="container p-md-5 mb-5 text-sofia">
                        <div class="row">
                            <div class="col-sm-12">
                                <div>
                                    <h1 class='hidden-lg text-uppercase'>${styles[i].style}<br><small class='text-uppercase'>${styles[i].name}</small></h1>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div id="style-showcase">
                                    <img src="../../assets/images/products/products/${styles[i].style}.jpg" alt="${styles[i].style}" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                                    <div class="container-fluid hidden-sm">
                                        <div class="row">
                                            <div class="col-sm-4"><img src="../../assets/images/products/products/${styles[i].style}.jpg"
                                                alt="${styles[i].style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                            <div class="col-sm-4"><img src="../../assets/images/products/products/${styles[i].style}_back.jpg"
                                            alt="${styles[i].style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                            <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                                            alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div>
                                                <h1 class='hidden-sm text-uppercase'>${styles[i].style}<br><small class='text-uppercase'>${styles[i].name}</small></h1>
                                            </div>
                                            <br>
                                            <br>
                                            ${styles[i].description}<br><br>
                                            <ul id="features">
                                            </ul>
                                        </div>
                                        <div id="swatches" class="col-sm-12">
                                        <br>
                                        </div>
                                        <div class="col-md-12 mt-3 d-flex justify-content-center">
                                            <button class="snipcart-add-item"
                                            data-item-id="${styles[i].style}"
                                            data-item-name="${styles[i].name}"
                                            data-item-price="40.00"
                                            data-item-url="https://onaseer87.github.io/medcoutureTest/test.html"
                                            data-item-description="${styles[i].description}"
                                            >Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `)
                } else {
                    $('#view').html(`
                    <div class="container p-md-5 mb-5 text-sofia">
                        <div class="row">
                            <div class="col-sm-12">
                                <div>
                                    <h1 class='hidden-lg text-uppercase'>${styles[i].style}<br><small class='text-uppercase'>${styles[i].name}</small></h1>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div id="style-showcase">
                                    <img src="../../assets/images/products/products/${styles[i].style}.jpg" alt="${styles[i].style}" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                                    <div class="container-fluid hidden-sm">
                                        <div class="row">
                                            <div class="col-sm-4"><img src="../../assets/images/products/products/${styles[i].style}.jpg"
                                                alt="${styles[i].style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                            <div class="col-sm-4"><img src="../../assets/images/products/products/${styles[i].style}_back.jpg"
                                            alt="${styles[i].style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                            <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                                            alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div>
                                                <h1 class='hidden-sm text-uppercase'>${styles[i].style}<br><small class='text-uppercase'>${styles[i].name}</small></h1>
                                            </div>
                                            <br>
                                            <br>
                                            ${styles[i].description}<br><br>
                                            <ul id="features">
                                            </ul>
                                        </div>
                                        <div id="swatches" class="col-sm-12">
                                        <br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `)
                } 
                styles[i].listFeatures();
                styles[i].appendSwatches();
                if(styles[i].kind === 'prints'){
                    $('#swatches').prepend(`
                        <div class="text-sofia">Matching Pants Color:</div>
                    `)
                }  
            }

        }
    }
    generateItemsHtml();

    let generateProductsHtml = function() {
        for (let i = 0; i < styles.length; i++){
            if (style === styles[i].kind){
                $('#products-view').append(
                    `   <div class="col-md-3 col-sm-6 p-3 text-sofia text-blue text-uppercase">
                            <a href="../collections/items/${styles[i].style}.html"><img src="../assets/images/products/products/${styles[i].style}.jpg" 
                            alt="${styles[i].name}" class="img-fluid"></a>
                            ${styles[i].style} <br> ${styles[i].name}
                        </div>
                    `
                )
            }
        }

    }
    generateProductsHtml();

    let imageStyleColorChange = function () {
        $('.swatches').on('click', function(){
            let color = $(this).data('color');
            console.log(color)
            $('#style-showcase').html(`
            <img src="../../assets/images/products/products/${style}_${color}.jpg" alt="${style}_${color}" class="img-fluid showcased-style mb-2" data-style="${style}_${color}" onError=this.src="../../assets/images/products/products/blank.jpg">
            <div class="container-fluid hidden-sm">
            <div class="row">
                <div class="col-sm-4"><img src="../../assets/images/products/products/${style}.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_back.jpg"
                alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
            </div>
            `)
        })

    }

    imageStyleColorChange();

    let thumbnailImageChange = function() {
        $('body').on('click','.thumbnails',function(){

            let orientation = $(this).data('orientation'); 
            console.log(orientation);
            if (orientation === "front") {
                $('#style-showcase').html(`
                <img src="../../assets/images/products/products/${style}.jpg" alt="${style}" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                <div class="container-fluid hidden-sm">
                <div class="row">
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}.jpg"
                        alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_back.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                    alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                </div>
            `)  
            } else if (orientation === "back") {
                $('#style-showcase').html(`
                <img src="../../assets/images/products/products/${style}_back.jpg" alt="${style}_back" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                <div class="container-fluid hidden-sm">
                <div class="row">
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}.jpg"
                        alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_back.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                    alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                </div>
            `)
            } else if (orientation === "sketch") {
                $('#style-showcase').html(`
                <img src="../../assets/images/products/products/${style}_sketch.jpg" alt="${style}_sketch" class="img-fluid mb-2" onError=this.src="../../assets/images/products/products/blank.jpg">
                <div class="container-fluid hidden-sm">
                <div class="row">
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}.jpg"
                        alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_back.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                    <div class="col-sm-4"><img src="../../assets/images/products/products/${style}_sketch.jpg"
                    alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="../../assets/images/products/products/blank.jpg"></div>
                </div>
            `) 
            }
  
        })

    }

    thumbnailImageChange();
    
})