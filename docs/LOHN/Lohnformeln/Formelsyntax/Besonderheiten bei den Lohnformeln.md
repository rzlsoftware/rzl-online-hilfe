# Besonderheiten bei den Lohnformeln

## WENN-DANN Bedingungen

Innerhalb der Lohnformelerstellung kann mit WENN-DANN Bedingungen gearbeitet werden.

| **Formelsyntax**                   |
| ---------------------------------- |
| WENN(Prüfung;Dann_Wert;Sonst_Wert) |

## Zugriff auf Subformeln

Der Zugriff auf bereits bestehende (Sub)Formeln erfolgt über den Formelnamen. Somit können Formeln in den WENN-DANN Bedingungen eingefügt werden.

## Runden

Die Rundung von Formelergebnissen erfolgt durch nachfolgende Formelsyntax:

| **Formelsyntax**              |
| ----------------------------- |
| RUNDEN(Kommazahl;Kommastelle) |

Die Kommazahl ist in den meisten Fällen das Ergebnis der Berechnung einer Lohnformel.

Gerundet wird an der angegebenen Kommastelle, wobei ab 0,5 aufgerundet wird. Positive Eintragungen im Feld Kommastelle runden nach dem Komma. Der Eintrag Null (0) rundet auf volle Euro. Negative Eintragungen im Feld Kommastelle runden vor dem Komma.