# helloExpress

## Semantic Versioning

Wir haben eine Versionsangabe mit 3 Stellen xx.xx.xx
Major.Minor.Patch
Die Major Stelle wird bei Inkompatiblen Änderungen der API (Breaking Changes) erhöht
Die Minor Stelle wird erhöht wenn wir neue Funktionen einbauen, die abwärtskompatibel sind
Die Patch Stelle wird erhöht nei Abwärtskompatiblen Bugfixes

1.10.0 1.9.0 => 1.10.0 ist die neuere Version

Wenn wir etwas mit npm install installieren schreibt npm automatisch erstmal ein
^ Caret vor die Version
^5.8.9 => installiert immer die neuste version, die keinen major sprung macht


~5.3.0 bedeutet nur patch  versionen dürfen sich ändern

< und > 5.3.0 entweder gößer oder kleiner als die angegebene version
<=
>= 

5.3.* wildcard
5.* 
Eine beliebige Version bei der Wildcard