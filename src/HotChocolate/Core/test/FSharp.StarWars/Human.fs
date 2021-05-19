namespace FSharp.StarWars

[<AutoOpen>]
type Human =
    { Id : string
      Name : string option
      Friends : string list
      AppearsIn : Episode list
      HomePlanet : string option }
