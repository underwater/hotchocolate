namespace FSharp.StarWars

type Episode =
    | NewHope = 1
    | Empire = 2
    | Jedi = 3

[<ReferenceEquality>]
type Human =
    { Id : string
      AppearsIn : Episode list }


type Query() =
    member this.Human =
        { Id = "1000"
          AppearsIn = [ Episode.NewHope; Episode.Empire; Episode.Jedi ] }
