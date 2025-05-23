# Erste Schritte (Kurzübersicht)

Die Funktionen des *RZL-Report Designer* sind ähnlich einem Textverarbeitungsprogramm aufgebaut. Der große Vorteil hier ist der sofortige Direktzugriff auf klientenbezogene Informationen. Mit Hilfe von [Formeln](../Formeln/Einfuegen_und_Bearbeiten_von_Formeln.md) können Sie einen direkten Bezug zu den benötigten Daten schnell und einfach herstellen. Interne Bearbeitungsnotizen, Anweisungen oder sonstige Informationen können Sie im Report vermerken und anschließend ausblenden. Diese werden somit nicht angedruckt.

## Die Arbeitsoberfläche im Report Designer

Durch Öffnen eines Reports wird der *RZL Report Designer* in einem separaten Dialogfenster gestartet.

!!! warning "Hinweis"
    Zur besseren Bearbeitung können Sie sich nach dem erstmaligen Start die einzelnen Bearbeitungsfenster (Formelansicht, Eigenschaftsfenster) über den Menüpunkt *Ansicht / Eigenschaftsfenster* einblenden lassen.

![Image](img/image6.png)

Nachfolgend wird die Arbeitsoberfläche im *Report Designer* beschrieben.

![Image](img/image7.png)

1.  Menüleiste

2.  Werkzeugleiste mit Schnellstartsymbolen

3.  [Formelansicht](../Formeln/Einfuegen_und_Bearbeiten_von_Formeln.md)

4.  [Lineal mit Tabulatoreinstellungen](../Report_bearbeiten/Text_und_Absatzbearbeitung.md)

5.  Kopfzeilenbereich: Durch Doppelklick kann eine Kopf-/Fußzeile eingegeben werden.

6.  Ausgegrauter Textbereich: Zur Hinterlegung von Kommentaren und Anweisungen können Textbereiche für den Ausdruck ausgegraut werden.

7.  Farbliche Markierungen im Seitenbereich (betrifft ausgegraute Textbereiche):

    <span style="color: darkblue;">**Blau:**</span> Absatz wird als reiner Informationstext angezeigt und beim Ausdruck komplett ausgeblendet.

    <span style="color: green;">**Grün**:</span> Im Absatz ist/sind eine/mehrere Bedingung(en) hinterlegt, die erfüllt ist/sind. Der Absatz wird beim Ausdruck daher angedruckt.

    <span style="color: red;">**Rot:**</span> Im Absatz ist/sind eine/mehrere Bedingung(en) hinterlegt, die nicht erfüllt ist/sind. Der Absatz wird nicht angedruckt.

    <span style="color: darkgoldenrod;">**Gelb:**</span> Im Absatz sind mehrere Bedingungen hinterlegt und nicht zur Gänze erfüllt. Im Ausdruck werden nur die erfüllten Bedingungen angedruckt.

8.  Eigenschaftsfenster: Je nach markiertem Bereich können Einstellungen zur Formatierung getroffen werden.

    !!! info "Tipp"
        Das Eigenschaftsfenster im rechten Bildschirmbereich dient zur Eingabe und Anpassung der Formatierung des selektierten Bereichs. Je nach markiertem Bereich (Tabelle, Text, Spalte, Dokument, Formel, Diagramm) passt es sich automatisch den jeweiligen Funktionen an.

9.  Gelbe Markierung eines Textes: Anzeige eines Formelergebnisses.

10. Grüne Markierung eines Textes: Anzeige einer Formel mit Direkteingabe. Die gewünschten Daten können hier sofort mittels Doppelklick oder der *F4-Taste* erfasst werden.

## Nützliche Shortcuts und Symbole

| Symbol                    | Tastenkombination             | Funktion                                                      |
| ------------------------- | ----------------------------- | ------------------------------------------------------------- |
| ![Image](img/image8.png)  | Strg + N                      | Neuen Report öffnen                                           |
| ![Image](img/image9.png)  | Strg + S                      | Report speichern                                              |
| ![Image](img/image10.png) | Strg + P                      | Report drucken                                                |
| ![Image](img/image11.png) |                               | Report im RZL PDF-Drucker bzw. RZL PDF-Manager Premium öffnen |
| ![Image](img/image12.png) | Strg + Z                      | Rückgängig                                                    |
| ![Image](img/image13.png) | Strg + Y                      | Rückgängig gemachte Änderung wiederherstellen                 |
| ![Image](img/image14.png) | Strg + X                      | Textbereich ausschneiden und in Zwischenablage stellen        |
| ![Image](img/image15.png) | Strg + C                      | Textbereich in die Zwischenablage kopieren                    |
| ![Image](img/image16.png) | Strg + V                      | Textbereich aus Zwischenablage einfügen                       |
| ![Image](img/image62.png) |                               | Report prüfen: Prüft den Report auf nicht auflösbare Formeln. |
| ![Image](img/image17.png) | Strg + F                      | öffnet den Suchen- und Ersetzen-Dialog                        |
| ![Image](img/image18.png) | Strg + F                      | öffnet den Suchen- und Ersetzen-Dialog                        |
|                           | Strg + I                      | öffnet den Formeldialog zur sofortigen Bearbeitung            |
|                           | Strg + E                      | Einfügen eines Erledigt-Symbols                               |
|                           | Enter am Textblock            | Zeilenumbruch einfügen                                        |
|                           | Enter am Nummernblock         | Tabstopp einfügen                                             |
|                           | Tabulatortaste                | Tabstopp einfügen                                             |
|                           | F4-Taste                      | Formeldialog zur Ansicht öffnen                               |
|                           | Strg + Enter                  | manueller Seitenumbruch einfügen                              |
|                           | Doppelklick linker Seitenrand | markiert den gesamten Absatz bzw. die Tabelle                 |
  