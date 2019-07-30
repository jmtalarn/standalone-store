module Main exposing (main)

-- 040_TYPE_SIGNATURE

import Array
import Browser
-- import Element exposing (..)
-- import Element.Border as Border
-- import Element.Input as Input
import Html exposing (Html)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)

-- MODEL


type alias Model =
    { count : Int
    }

-- add a b  = a + b
-- add = \a b -> a + b


init : () -> ( Model, Cmd Msg )
init _ =
    ( { count =  0  -- , -1000 ]
      }
      -- Task.perform : (Time.Posix -> msg) -> Task Never Time.Posix -> Cmd msg
      -- Time.now : Task x Time.Posix
    , Cmd.none
    )



-- UPDATE


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        Increment ->
            let
                count = model.count
            in
            ( { model | count = count + 1 }, Cmd.none )

        Decrement ->
            let
                count = model.count
            in
            ( { model | count = count - 1 }, Cmd.none )



view : Model -> Html Msg
view model =
        Html.div 
        [ style "display" "flex"
        , style "margin" "0 auto"
        , style "max-width" "50%"
        , style "align-items" "center"
        , style "justify-content" "space-around"
        ] 
        [ Html.button [ onClick Decrement ] [Html.text "-"]
        , Html.p [] [ Html.text (String.fromInt model.count) ]
        , Html.button [ onClick Increment ] [ Html.text "+"]
        ]


--   display: flex;
--   margin: 0 auto;
--   max-width: 50%;
--   align-items: center;
--   justify-content: space-around;

-- [ counterComponent (Increment 0) (Decrement 0) 0 model
-- ]
-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }
