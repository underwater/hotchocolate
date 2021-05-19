namespace FSharp.StarWars

[<ReferenceEquality>]
type Episode =
    | NewHope of int
    | Empire of int
    | Jedi of int

[<ReferenceEquality>]
type Human =
    { Id : string
      AppearsIn : Episode list }


type Query() =
    member this.Human =
        { Id = "1000"
          AppearsIn = [ Episode.Empire 1; Episode.Jedi 2; Episode.NewHope 3 ] }
