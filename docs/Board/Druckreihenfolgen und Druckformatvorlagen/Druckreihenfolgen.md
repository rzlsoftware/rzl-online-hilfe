Mit einer Druckreihenfolge legen Sie einmalig eine geordnete Liste von Ausdrucken fest und führen diese anschließend für beliebig viele Klienten in einem Zug aus. Anders als in der Klassik sind Druckreihenfolgen im RZL Board programmübergreifend: Eine Reihenfolge kann Ausdrucke aus FIBU Next, HON Next und BIL Next kombinieren. Die erzeugten Ausdrucke werden als PDF an den PDF-Manager übergeben.

Die Programmfunktion befindet sich im RZL Board unter **Stamm / Ausdrucke**.
Die Liste der angelegten Druckreihenfolgen können Sie mit den Filtern *Alle, Allgemein und Persönlich* einschränken. Das Symbol vor dem Namen der Druckreihenfolge zeigt, ob eine Druckreihenfolge allgemein ![Symbol für allgemein](<img/allgemein.png>) (allen Mitarbeitern) oder persönlich ![persönlich](<img/persönlich.png>) (nur Ihnen) zur Verfügung steht.

![Übersicht Druckreihenfolge](<img/Übersicht Druckreihenfolge.png>)

Die verfügbaren Aktionen finden Sie im Ribbon: Im Bereich Druckreihenfolgen können Sie über *Anlegen* eine neue Druckreihenfolge erstellen sowie bestehende Druckreihenfolgen *bearbeiten, löschen oder duplizieren*. Mit *Klienten zuordnen* öffnet sich eine Liste in denen alle Ihre Klienten aufgelistet werden. Sie können mit dieser Liste die gewünschten Klienten zuordnen. 

# Eine Druckreihenfolge anlegen
Nutzen Sie die Funktion *Anlegen* im Bereich Druckformatvorlagen. Geben Sie einen aussagekräftigen Namen ein. Mit den Optionen *Allgemein* und *Persönlich* legen Sie die Verfügbarkeit fest. Über die Auswahl **Druckformatvorlage** bestimmen Sie das Layout der Ausdrucke. Mit *Standard Druckformatvorlage* verwenden gilt die in Ihrer Kanzlei hinterlegte Standardvorlage.


## Ausdrucke hinzufügen und ordnen

In der Spalte *Verfügbare Ausdrucke* finden Sie alle druckbaren Funktionen, nach Programm gruppiert (FIBU Next, BIL Next, HON Next) und darunter nach Kategorien wie Konten, Saldenlisten, OP-Liste oder KER. Über das Suchfeld *Verfügbare Ausdrucke durchsuchen* können Sie einen Ausdruck per Namen suchen.
Markieren Sie den gewünschten Ausdruck und übernehmen Sie ihn mit dem Zuordnen-Pfeil ![Pfeil zum Zuordnen](<img/zuordnen Pfeil.png>) oder Drag & Drop in die Spalte Druckschritte. Jeder übernommene Ausdruck erscheint dort als eigener, nummerierter Druckschritt. Die Reihenfolge der Druckschritte ändern Sie per Drag & Drop mittels ![Verschieben-Symbol](<img/verschieben Symbol.png>).

## Druckoptionen je Druckschritt festlegen

Klappen Sie einen Druckschritt auf, um seine Druckoptionen festzulegen. Die verfügbaren Optionen entsprechen dem jeweiligen Ausdruck aus dem Fachprogramm – beim HON-Next-Ausdruck *Offene Leistungen* etwa die Verrechnungsgruppe (z. B. Buchhaltung) und die Option Erfassungsklienten getrennt ausweisen.
Diese Optionen werden fix in der Druckreihenfolge gespeichert und bei jeder Ausführung verwendet. Alternativ lassen sich einzelne Optionen bei jeder Ausführung neu abfragen – zum Beispiel über Verrechnungsgruppenfilter beim Ausführen abfragen.

![Druckoptionen](<img/Druckoptionen.png>)

## Klienten zuordnen

Sie können einer Druckreihenfolge bereits eine Vorauswahl an Klienten hinterlegen. Wählen Sie dazu im Ribbon *Klienten zuordnen* und markieren Sie die gewünschten Klienten. Diese werden gemeinsam mit der Druckreihenfolge gespeichert und beim Ausführen automatisch vorausgewählt.

![Klient zuordnen](<img/Klient Zuordnen.png>)

!!! warning "Hinweis"
    Sie können nur jene Klienten zuordnen, für welche Sie entsprechende Berechtigungen besitzen. Klienten, für welche Sie keine Berechtigung besitzen werden nicht angezeigt.

Speichern Sie Ihre Eingaben abschließend über **Speichern**. Die Druckreihenfolge steht somit in der Übersicht zur Verfügung.

# Eine Druckreihenfolge ausführen

Markieren Sie in der Liste die gewünschte Druckreihenfolge und wählen Sie im Ribbon *Ausführen*.

Im Bereich *Zeitraum* legen Sie zentral fest, für welchen Zeitraum gedruckt werden soll. Diese Angabe ist eine Voreinstellung für alle Druckschritte: Die hier gewählten Werte werden bei den einzelnen Druckschritten automatisch übernommen und lassen sich je Schritt anpassen.
Welche Eingabefelder für den Zeitraum bei den einzelnen Ausdrucken erscheinen hängt vom gewählten Ausdruck ab. Sie legen den Zeitbezug einmal gemeinsam fest und können diesen wenn nötig in jedem Druckschritt einzeln abändern.

![Ausführen](<img/Ausführen_Eingabe Zeitraum.png>)

Im Bereich *Klientenauswahl* wählen Sie über die Kontrollkästchen, für welche Klienten die Druckreihenfolge ausgeführt werden soll. Wurden der Druckreihenfolge bereits vorab Klienten zugeordnet, kann das in diesem Schritt angepasst bzw. kontrolliert werden. Über das Suchfeld haben Sie außerdem die Möglichkeit einen Klienten per Namen/Nummer zu suchen.

Im Bereich Schritt-Parameter legen Sie zu jedem Druckschritt die Einstellungen fest, die erst unmittelbar vor der Ausführung gewählt werden. Das betrifft in erster Linie die Eingabe des Zeitraumes, je nach Ausdruck aber auch weitere Optionen. Welche Felder ein Druckschritt anzeigt, hängt also vom jeweiligen Ausdruck ab.

!!! info "Tipp"
    Der Zeitraum muss im Bereich *Zeitraum* voreingestellt werden. Der Zeitraum kann aber in diesem Bereich abgeändert werden.

Mit **Ausführen** erfolt der Ausdruck laut Definition in der Druckreihenfolge.

# Status der Ausführung

Ein Fortschrittsbalken zeigt den aktuellen Gesamtfortschritt an. Außerdem wird angezeigt welche Läufe gerade aktiv, wartend, abgeschlossen, abgeschlossen mit Fehlern oder fehlgeschlagen sind.

Im Bereich *Läufe* sehen Sie jeden Klienten mit Klientennummer, Name und seinem Status. Klappen Sie einen Klienten auf, um seine Druckschritte in der festgelegten Reihenfolge einzusehen – jeder Schritt mit eigenem Status und, falls vorhanden, einem Hinweistext.

Den Status erkennen Sie auf einen Blick an dem Symbol – sowohl beim Klienten als auch bei den einzelnen Druckschritten:
•	Grün – erfolgreich erstellt.
•	Rot – fehlgeschlagen bzw. mit Fehlern abgeschlossen.
•	Blaues „i“ – ein Hinweis, kein Fehler. Den Grund nennt der Hinweistext, zum Beispiel einen übersprungenen Ausdruck.

Die fertigen Ausdrucke werden laufend an den PDF-Manager übergeben. Mit *Erneut ausgeben* können Sie die Ausdrucke noch einmal ausgeben lassen, mit **Schließen** beenden Sie das Fenster.

!!! warning "Hinweis"
    Übersprungene Ausdrucke sind im Massenlauf der Normalfall und kein Grund zur Sorge. Sie erkennen den Grund jeweils am ![I-Symbol](<img/I-Symbol.png>).

