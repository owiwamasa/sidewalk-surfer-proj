from app.models import db, Media


def seed_media():
    Ninjapose = Media(description = "Ninja pose", mediaUrl = "https://images.unsplash.com/photo-1602966629492-abcbf7858cd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWV0JTIwc2thdGVib2FyZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 1, spotId = 1)
    Ijumpedoverarock = Media(description = "I jumped over a rock", mediaUrl = "https://images.unsplash.com/photo-1523562154073-db28c5e8863e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwc2thdGVib2FyZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 2, spotId = 1)
    Todayweskated = Media(description = "Today we skated", mediaUrl = "https://images.unsplash.com/photo-1503417680882-163c1609fd2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyZWV0JTIwc2thdGVib2FyZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60", userId = 3, spotId = 1)
    Myfavoriteskatespot = Media(description = "My favorite skate spot", mediaUrl = "https://images.unsplash.com/photo-1512984860921-592685ac9905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RyZWV0JTIwc2thdGVib2FyZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60", userId = 4, spotId = 1)
    StreetskatinginLosAngeles = Media(description = "Street skating in Los Angeles", mediaUrl = "https://www.youtube.com/watch?v=09_lVj3U7jk", userId = 5, spotId = 1)
    Twelvestair = Media(description = "12 stair", mediaUrl = "https://images.unsplash.com/photo-1496611637374-59db5549da77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 6, spotId = 2)
    Goingtowork = Media(description = "Going to work", mediaUrl = "https://images.unsplash.com/photo-1572262009280-31362f951d5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 7, spotId = 2)
    Iloveskating = Media(description = "I love skating", mediaUrl = "https://images.unsplash.com/photo-1512163237523-59bd9bf5797c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 8, spotId = 2)
    Atthisamazingskatespot = Media(description = "At this amazing skate spot", mediaUrl = "https://images.unsplash.com/photo-1597699931341-c0c5f0a0264f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 9, spotId = 2)
    StreetSkatelineinLosAngeles = Media(description = "Street Skate line in Los Angeles", mediaUrl = "https://www.youtube.com/watch?v=WFSwqwArD0I", userId = 10, spotId = 2)
    Purplesky = Media(description = "Purple sky", mediaUrl = "https://images.unsplash.com/photo-1510488826999-456298dbb023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 1, spotId = 3)
    Sk8everyday = Media(description = "Sk8 everyday", mediaUrl = "https://images.unsplash.com/photo-1490909076160-9a3687c8e965?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 2, spotId = 3)
    Epicphoto = Media(description = "Epic photo", mediaUrl = "https://images.unsplash.com/photo-1517871627464-75e4506348f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 3, spotId = 3)
    Newtrick = Media(description = "New trick", mediaUrl = "https://images.unsplash.com/photo-1519256155806-cd510524ed97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 4, spotId = 3)
    ShreddingtheStreetsofLA = Media(description = "Shredding the Streets of LA", mediaUrl = "https://www.youtube.com/watch?v=t86X59xjgnA", userId = 5, spotId = 3)
    Bestplacetoskate = Media(description = "Best place to skate", mediaUrl = "https://images.unsplash.com/photo-1532543513198-3b03daf2daac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 6, spotId = 4)
    Streetskating = Media(description = "Street skating", mediaUrl = "https://images.unsplash.com/photo-1501700463632-8c02db199a4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 7, spotId = 4)
    Olliedafirehydrant = Media(description = "Ollied a fire hydrant ", mediaUrl = "https://images.unsplash.com/photo-1525649804278-020931621fa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 8, spotId = 4)
    Skatehomies = Media(description = "Skate homies", mediaUrl = "https://images.unsplash.com/photo-1542727568-395b760e571d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 9, spotId = 4)
    StreetSkatingClip = Media(description = "Street Skating Clip", mediaUrl = "https://www.youtube.com/watch?v=HvXWGE2C54s", userId = 10, spotId = 4)
    Bigollie = Media(description = "Big ollie", mediaUrl = "https://images.unsplash.com/photo-1547198152-dde291a08c45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 1, spotId = 5)
    Wallislookinatmefunny = Media(description = "Wall is lookin at me funny", mediaUrl = "https://images.unsplash.com/photo-1601204645105-cba6f42cca69?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 2, spotId = 5)
    Gotmyvansonbuttheylooklikesneakers = Media(description = "Got my vans on, but they look like sneakers", mediaUrl = "https://images.unsplash.com/photo-1581888664619-bb7e4b4f21d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 3, spotId = 5)
    Landedthis = Media(description = "Landed this!", mediaUrl = "https://images.unsplash.com/photo-1617392079938-d332e5d640e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 4, spotId = 5)
    SkatingWestLosAngeles = Media(description = "Skating West Los Angeles", mediaUrl = "https://www.youtube.com/watch?v=ijD2jMNXIA4", userId = 5, spotId = 5)
    Epic = Media(description = "Epic", mediaUrl = "https://images.unsplash.com/photo-1535064389948-5c28f3533279?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 6, spotId = 6)
    SkatinginLA = Media(description = "Skating in LA", mediaUrl = "https://images.unsplash.com/photo-1504641823678-25fbd56dda94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60", userId = 7, spotId = 6)
    Doakickflip = Media(description = "Do a kickflip!", mediaUrl = "https://images.unsplash.com/photo-1523745962530-340c0eeb7e7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 8, spotId = 6)
    Gnarrrly = Media(description = "Gnarrrly", mediaUrl = "https://images.unsplash.com/photo-1544364493-4ff9efeabce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60", userId = 9, spotId = 6)
    LAStreetSkaing = Media(description = "LA Street Skaing", mediaUrl = "https://www.youtube.com/watch?v=DuANZ-m09Ic", userId = 10, spotId = 6)
    BigAIR = Media(description = "Big AIR", mediaUrl = "https://images.unsplash.com/photo-1571677594976-153c59b7ee67?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 1, spotId = 7)
    SkatinginCali = Media(description = "Skating in Cali", mediaUrl = "https://images.unsplash.com/photo-1616617962459-bd6480d462c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 2, spotId = 7)
    DidIlandthis = Media(description = "Did I land this?", mediaUrl = "https://images.unsplash.com/photo-1530303848045-ce0a70903a45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 3, spotId = 7)
    Ididntlandthis = Media(description = "I didn't land this", mediaUrl = "https://images.unsplash.com/photo-1541481253288-ef431cd86dfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 4, spotId = 7)
    NollieBSHeelflip = Media(description = "Nollie BS Heelflip", mediaUrl = "https://www.youtube.com/watch?v=3zUIgelhrhs", userId = 5, spotId = 7)
    NiceshotbeforeIateit = Media(description = "Nice shot before I ate it", mediaUrl = "https://images.unsplash.com/photo-1581888664538-9d75c7782a96?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 6, spotId = 8)
    Streetartstreetskating = Media(description = "Street art + street skating!", mediaUrl = "https://images.unsplash.com/photo-1615550472549-a36157f18c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 7, spotId = 8)
    Californiasunshine = Media(description = "California sunshine", mediaUrl = "https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 8, spotId = 8)
    Landedmyfirsttrick = Media(description = "Landed my first trick", mediaUrl = "https://images.unsplash.com/photo-1541481127914-787dd05885cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 9, spotId = 8)
    SkatingDTLA = Media(description = "Skating DTLA", mediaUrl = "https://www.youtube.com/watch?v=uu1DlDqXiKs", userId = 10, spotId = 8)
    Boom = Media(description = "BOOM", mediaUrl = "https://images.unsplash.com/photo-1616617963821-5c0d3c113101?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 1, spotId = 9)
    SunsoutinLA = Media(description = "Suns out in LA", mediaUrl = "https://images.unsplash.com/photo-1562750418-4d5cd2ab8de9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 2, spotId = 9)
    Grindddgrinddgrind = Media(description = "Grinddd grindd grind", mediaUrl = "https://images.unsplash.com/photo-1506636619875-782c19471c15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 3, spotId = 9)
    Tuesday = Media(description = "Tuesday", mediaUrl = "https://images.unsplash.com/photo-1535064677725-f061f409723c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHN0cmVldCUyMHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 4, spotId = 9)
    TenTricksinLA = Media(description = "10 Tricks in LA", mediaUrl = "https://www.youtube.com/watch?v=ZP1VaDgyfWs", userId = 5, spotId = 9)
    Ollieinmyfavoritesweatsuit = Media(description = "Ollie in my favorite sweatsuit", mediaUrl = "https://images.unsplash.com/photo-1515991363987-66528702e682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxzdHJlZXQlMjBza2F0ZWJvYXJkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId = 6, spotId = 10)
    Grindatmyfavoriteskatespot = Media(description = "Grind at my favorite skate spot", mediaUrl = "https://images.unsplash.com/photo-1483378255583-fd248d0e6a98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxzdHJlZXQlMjBza2F0ZWJvYXJkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 7, spotId = 10)
    Skatingart = Media(description = "Skating + art", mediaUrl = "https://images.unsplash.com/photo-1608610479260-135933538b00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxzdHJlZXQlMjBza2F0ZWJvYXJkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId = 8, spotId = 10)
    Wallride = Media(description = "Wallride", mediaUrl = "https://images.unsplash.com/photo-1458080767772-b1011d305557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxzdHJlZXQlMjBza2F0ZWJvYXJkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId = 9, spotId = 10)
    FirstTimeSkatinginLA = Media(description = "First Time Skating in LA", mediaUrl = "https://www.youtube.com/watch?v=PHotKVx3MeY", userId = 10, spotId = 10)

    db.session.add(Ninjapose)
    db.session.add(Ijumpedoverarock)
    db.session.add(Todayweskated)
    db.session.add(Myfavoriteskatespot)
    db.session.add(StreetskatinginLosAngeles)
    db.session.add(Twelvestair)
    db.session.add(Goingtowork)
    db.session.add(Iloveskating)
    db.session.add(Atthisamazingskatespot)
    db.session.add(StreetSkatelineinLosAngeles)
    db.session.add(Purplesky)
    db.session.add(Sk8everyday)
    db.session.add(Epicphoto)
    db.session.add(Newtrick)
    db.session.add(ShreddingtheStreetsofLA)
    db.session.add(Bestplacetoskate)
    db.session.add(Streetskating)
    db.session.add(Olliedafirehydrant)
    db.session.add(Skatehomies)
    db.session.add(StreetSkatingClip)
    db.session.add(Bigollie)
    db.session.add(Wallislookinatmefunny)
    db.session.add(Gotmyvansonbuttheylooklikesneakers)
    db.session.add(Landedthis)
    db.session.add(SkatingWestLosAngeles)
    db.session.add(Epic)
    db.session.add(SkatinginLA)
    db.session.add(Doakickflip)
    db.session.add(Gnarrrly)
    db.session.add(LAStreetSkaing)
    db.session.add(BigAIR)
    db.session.add(SkatinginCali)
    db.session.add(DidIlandthis)
    db.session.add(Ididntlandthis)
    db.session.add(NollieBSHeelflip)
    db.session.add(NiceshotbeforeIateit)
    db.session.add(Streetartstreetskating)
    db.session.add(Californiasunshine)
    db.session.add(Landedmyfirsttrick)
    db.session.add(SkatingDTLA)
    db.session.add(Boom)
    db.session.add(SunsoutinLA)
    db.session.add(Grindddgrinddgrind)
    db.session.add(Tuesday)
    db.session.add(TenTricksinLA)
    db.session.add(Ollieinmyfavoritesweatsuit)
    db.session.add(Grindatmyfavoriteskatespot)
    db.session.add(Skatingart)
    db.session.add(Wallride)
    db.session.add(FirstTimeSkatinginLA)

    db.session.commit()


def undo_media():
    db.session.execute('TRUNCATE media RESTART IDENTITY CASCADE;')
    db.session.commit()
