port module Main exposing (..)

-- 040_TYPE_SIGNATURE

import Array
import Browser
-- import Element exposing (..)
-- import Element.Border as Border
-- import Element.Input as Input
import Html exposing (Html)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)


port increment: () -> Cmd msg
port decrement: () -> Cmd msg
port countFromState: (Int -> msg) -> Sub msg
-- MODEL


type alias Model =
    { count : Int
    }

-- add a b  = a + b
-- add = \a b -> a + b


init : Int -> ( Model, Cmd Msg )
init count =
    ( { count =  count  -- , -1000 ]
      }
      -- Task.perform : (Time.Posix -> msg) -> Task Never Time.Posix -> Cmd msg
      -- Time.now : Task x Time.Posix
    , Cmd.none
    )



-- UPDATE


type Msg
    = Increment
    | Decrement
    | State Int



update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        Increment ->
            let
                count = model.count
            in
            ( { model | count = count + 1 }, increment () )

        Decrement ->
            let
                count = model.count
            in
            ( { model | count = count - 1 }, decrement () )
        
        State count->
            ( { model | count = count }, Cmd.none )

subscriptions : Model -> Sub Msg
subscriptions model =
    countFromState State

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



main =
    Browser.element
        { init = init 
        , update = update
        , view = view
        , subscriptions = subscriptions -- \_ -> Sub.none
        }
