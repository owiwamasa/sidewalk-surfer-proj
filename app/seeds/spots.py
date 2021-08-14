from app.models import db, Spot

def seed_spots():
    VeniceBeachSkatepark = Spot (name = "Venice Beach Skatepark", address = "1800 Ocean Front Walk, Venice, CA 90291", description = "Oceanfront skatepark featuring a sunken pool & a street-inspired area with stairs, ledges & rails.", longitude = 33.9874020213175, latitude = -118.475489889307, imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Pool_%2832100805326%29.jpg/250px-Pool_%2832100805326%29.jpg")
    JKownPlaza = Spot (name = "JKown Plaza", address = "3700 Wilshire Blvd, Los Angeles, CA 90010", description = "An authentic Los Angeles spot which is located at the Wilshire Boulevard and S Serrano Avenue intersection. ", longitude = 34.0609324005181, latitude = -118.307205633269, imageUrl = "https://jtobar213home.files.wordpress.com/2021/03/image-2-28-21-at-9.17-pm-2.jpg?w=1024")
    StonerSkatePlaza = Spot (name = "Stoner Skate Plaza", address = "1835 Stoner Ave #1801, Los Angeles, CA 90025", description = "Well known park that can occasionally have some big name people. The ground is extremely smooth. That park is mostly manny pads.", longitude = 34.0453945217256, latitude = -118.453476171606, imageUrl = "https://img.redbull.com/images/c_fill,w_1500,h_1000,g_auto,f_auto,q_auto/redbullcom/2017/02/19/0ad0b9c0-17f2-49bd-9192-352f71b655f2/stoner-park")
    WestLACourthouseSkatePlaza = Spot (name = "West LA Courthouse Skate Plaza", address = "1633 Purdue Ave, Los Angeles, CA 90025", description = "The West LA Courthouse is a street skateboarding spot in Santa Monica, California. Once an illicit skate spot, this location became a public skatepark after being purchased by Nike Skateboarding in 2014.", longitude = 34.0464912643888, latitude = -118.449434005742, imageUrl = "https://skatethestates.com/wp-content/uploads/2021/03/West-LA-Courthouse-Skate-Plaza-California.jpg")
    SheldonSkatePark = Spot (name = "Sheldon Skate Park", address = "12511 Sheldon St, Sun Valley, CA 91352", description = "Super spread out park with mostly ledges and street obstacles. Plenty of picknik tables and benches to chill, also very easy to find.", longitude = 34.2502579476017, latitude = -118.394388657764, imageUrl = "https://www.laparks.org/sites/default/files/facility/south-east-valley-skate-park-aka-sheldon-skate-park/images/south-east-valley-skate-park-2.jpg")
    ElSerenoSkatepark = Spot (name = "El Sereno Skatepark", address = "Klamath St, Los Angeles, CA 90032", description = "Great park, it's setup like a street competition park so there aren't any intersecting lines. Not much for transition and no bowl.", longitude = 34.0769164761945, latitude = -118.181921853278, imageUrl = "https://www.laparks.org/sites/default/files/facility/el-sereno-skate-park/images/el-sereno-skate-park-16.jpg")
    LaFayetteSkatePlaza = Spot (name = "La Fayette Skate Plaza", address = "2800 Wilshire Blvd, Los Angeles, CA 90005", description = "Popular skateboarding site with a variety of benches, rails, ledges & stairs in a park setting.", longitude = 34.0633806821784, latitude = -118.285339447434, imageUrl = "https://lh3.ggpht.com/p/AF1QipM02vvHFkhHft0bA4YDjJPPLScydTOYsAtXlWYV=s1024")
    JackieTatumSkatePlaza = Spot (name = "Jackie Tatum Skate Plaza", address = "1452 W 61st St, Los Angeles, CA 90047", description = "Great fun place this plaza has many fun obstacles and beautiful palm trees. Make sure you don’t bring a scooter or people with jump you.", longitude = 33.9845693402427, latitude = -118.302215931413, imageUrl = "https://lh3.ggpht.com/p/AF1QipNvjNvGR8EllSM4NvohRxnU53sTmNuW3S-G75kS=s1024")
    HazardParkSkatePlaza = Spot (name = "Hazard Park Skate Plaza", address = "2230 Norfolk St, Los Angeles, CA 90033", description = "It's an amazing park and it has great transitions and obsticals.", longitude = 34.0610350194599, latitude = -118.200771515577, imageUrl = "https://static.wixstatic.com/media/96dded_33d94a1cc70d4f6c913bf458415e2bc5~mv2.jpg/v1/fit/w_960,h_638,q_90/96dded_33d94a1cc70d4f6c913bf458415e2bc5~mv2.webp")
    WestchesterSkatePlaza = Spot (name = "Westchester Skate Plaza", address = "7200 W Manchester Ave, Los Angeles, CA 90045", description = "Great place to skate in the mornings when it's not too crowded, floor is very slick, will help your 360s turn into 540s which sometimes is good and bad.", longitude = 33.9602804670312, latitude = -118.414426620633, imageUrl = "https://lh3.ggpht.com/p/AF1QipMv9hyRW4EEvSnbZhuts6k23hKyv7hhPn0xWGdC=s1536")

    db.session.add(VeniceBeachSkatepark)
    db.session.add(JKownPlaza)
    db.session.add(StonerSkatePlaza)
    db.session.add(WestLACourthouseSkatePlaza)
    db.session.add(SheldonSkatePark)
    db.session.add(ElSerenoSkatepark)
    db.session.add(LaFayetteSkatePlaza)
    db.session.add(JackieTatumSkatePlaza)
    db.session.add(HazardParkSkatePlaza)
    db.session.add(WestchesterSkatePlaza)

    db.session.commit()

def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
