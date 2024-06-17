# Registerblatt „Workflow“

Im Menü *Workflow* haben Sie die Möglichkeit, wiederkehrende
Einstellungen (wie zum Beispiel bestimmte Seitennummerierungen,
Wasserzeichen, etc.) als definierten Ablauf – als „Workflow“ –
abzuspeichern.

Dies bedeutet, dass bestimmte Aktionen vom RZL PDF-Manager „der Reihe
nach“ automatisch an jedem ausgewählten PDF-Dokument durchgeführt
werden.

![](<img/image58.png>)

## Workflow hinzufügen

Um einen Workflow zu erstellen, klicken Sie auf *Workflow hinzufügen*.
Das Fenster *Workflow* öffnet sich.

![](<img/image59.png>)

**Name**

Hier vergeben Sie einen Namen für den Workflow.

**Beschreibung**

Beschreiben Sie die Funktion des Workflows.

**Kanzleiweiter Workflow**

Durch Anhaken bestimmen Sie, ob dieser Workflow *kanzleiweit* genutzt
werden kann. Diese Workflows werden dann bei *Kanzleiweite Workflows*
angezeigt. Somit können Sie und Ihre KollegInnen innerhalb der Kanzlei
auf diesen Workflow zugreifen. Bearbeitet und gelöscht werden dürfen
diese durch die Benutzergruppen *Klientenbearbeiter* und
*KIS-Administrator.*

**Kopie des Dokuments bearbeiten**

Wenn angehakt, werden die ausgewählten Dokumente kopiert. Der Workflow
wird an dieser Kopie ausgeführt.

**Kopie der Dokumentenliste hinzufügen**

Wenn angehakt, wird die Kopie des Dokuments (bei der der Workflow
aufgeführt wurde) der Dokumentenliste hinzugefügt.

**Neue Aktion**

Fügen Sie diesem Workflow bestimmte Aktionen hinzu (siehe unten,
*Workflow: eine neue Aktion hinzufügen*).

Links unter „Aktionen“ sehen Sie bereits hinzugefügte Aktionen

**Zuständigkeit**

Sie können dem Workflow eine Zuständigkeit zuweisen. Diese Workflows
können nur von jenen Mitarbeitern gesehen werden, die diese
Zuständigkeit im KIS hinterlegt haben. Weitere Informationen zu den
Zuständigkeiten entnehmen Sie bitte dem KIS Handbuch. Durch zuweisen
einer Zuständigkeit wird der Workflow ebenfalls in einer eigenen Gruppe
im PDF-Manager angezeigt.

![](<img/image60.png>)

**Speichern**

Speichern Sie den Workflow samt allen Aktionen.

**Abbrechen**

Verwerfen Sie diesen Workflow.

**Workflow**

Durch Anklicken der Schaltfläche
![](<img/image61.png>)haben Sie die Möglichkeit
einem neuen Workflow mehrere, bestimmte Aktionen
hinzuzufügen.

Diese Aktionen werden vom RZL PDF-Manager „der Reihe nach“ automatisch
durchgeführt.

![](<img/image62.png>)

Bei jeder unten beschriebenen Aktion haben Sie zusätzlich die
Möglichkeit im Fenster die Option *Ausführung der Aktion bestätigen* zu
markieren.

Wenn Sie *„Ausführung der Aktion bestätigen“* ankreuzen verlangt der RZL
PDF-Manager jedes Mal, bevor diese Aktion ausgeführt wird, eine
Bestätigung der Durchführung mit *JA*.

Verneinen Sie diese Frage, wird diese spezielle Aktion übersprungen und
automatisch mit der nachfolgenden Aktion fortgefahren. Für jede Aktion
kann diese Ausführungs-Frage individuell markiert werden.

![](<img/image63.png>)

**Bezeichnungsschema anwenden**

Wendet das ausgewählte Bezeichnungsschema auf alle Dokumente des
Workflows an.

**Dokumentenschutz**

Diese Aktion bewirkt, dass einem PDF-Dokument automatisch ein
Dokumentenschutz (mit den hier festgelegte/angehakten Einstellungen)
hinzugefügt wird oder dieser entfernt wird. 

**Dokumenteninformation ändern**

Einem PDF-Dokument werden automatisch bestimmte Informationen
hinzugefügt. 

**Drucken**

Ein PDF-Dokument wird automatisch gedruckt. Aus Technischen Gründen
können hier keine speziellen Druckereigenschaften – wie Lochen, Heften
und weitere – gesetzt werden. Um dieser Einschränkung entgegen zu
wirken, können Sie sich mehrere Drucker einrichten, jedem Drucker fixe
Druckereigenschaften hinterlegen und den Drucker bei der Workflowaktion
Drucken auswählen.

**E-Mail senden**

Ein PDF-Dokument wird automatisch per E-Mail versendet. 

**Externes Dokument hinzufügen**

Ein externes Dokument anhand eines Pfades hinzufügen. Des Weiteren
können Sie die Position bestimmen an der das Dokument eingefügt wird.
Passwortgeschützte Dateien werden ebenfalls unterstützt.

**Hintergrund ändern**

Einem PDF-Dokument wird automatisch ein bestimmter Hintergrund
zugeordnet. 

**Inhaltsverzeichnis**

Einem PDF-Dokument wird automatisch ein Inhaltsverzeichnis hinzugefügt.


**KIS**

Ein bestimmtes PDF-Dokument wird automatisch dem RZL
Kanzlei-Informations-System hinzugefügt.

**Klientenportal**

Ein bestimmtes PDF-Dokument wird automatisch dem RZL Klientenportal
hinzugefügt.

**Lesezeichennummerierung**

Die Lesezeichen eines PDF-Dokuments werden automatisch nummeriert oder
eine bestehende Nummerierung wird entfernt. 

**Seitennummerierung**

Einem PDF-Dokument wird automatisch eine Seitennummerierung hinzugefügt.

**Speichern**

Ein PDF-Dokument wird automatisch gespeichert. 

**Trennen**

Ein PDF-Dokument trennen. 

**Wasserzeichen**

Einem PDF-Dokument wird automatisch ein Wasserzeichen hinzugefügt.

**Zusammenführen**

In dieser Aktion können Einstellungen zum Zusammenführen von
PDF-Dokumenten vorgenommen werden.


## Workflow ausführen

Ein fertiger Workflow *(Beispiel unten: Name „E-Mail Versand“.
Beinhaltet die Aktionen „Zusammenführen“, „Wasserzeichen“ und „E-Mail
senden“)* könnte beispielweise so aussehen.

![](<img/image64.png>)

Zum Ausführen markieren Sie das/die PDF-Dokument(e). Klicken im
Registerblatt *Workflow* auf dem jeweiligen Workflow und wählen
*Workflow ausführen.*

![](<img/image65.png>)

Dadurch werden die definierten Aktionen für alle markierten Dokumente
automatisch der Reihe nach ausgeführt.

## Workflow bearbeiten/duplizieren/löschen/exportieren

Sie haben neben der Ausführung auch die Möglichkeit einen bestehenden
Workflow zu bearbeiten, zu duplizieren (= kopieren), als XML zu
exportieren (Sicherung) oder wieder zu löschen.

![](<img/image66.png>)

## Workflow als Favorit abspeichern

Wenn Sie die Option *Zu Favoriten hinzufügen* wählen, wird dieser
Workflow auf der Startleiste des RZL PDF-Managers (Registerblatt
*Dokument*) angezeigt und kann auch gleich von dort gestartet werden.

![](<img/image67.png>)

Sie können einen als Favorit gespeicherten Workflow jederzeit wieder
entfernen, indem Sie im Bereich *Workflow bearbeiten* mit der rechten
Maustaste dann auf *Von Favoriten entfernen* klicken.

![](<img/image68.png>)

## Individuelle Ausführung eines Workflows 

Neu im RZL PDF-Manager ist auch, dass Sie einen ausgewählten Workflow
einmalig auch *individuell* (mit Ihren eigenen Änderungen) ausführen
können, *ohne* dabei den bestehenden Workflow neu abspeichern oder
bearbeiten zu müssen.

Dies ist vor allem dann sinnvoll, wenn Sie die Aktion nur einmalig bzw.
sehr selten mit bestimmten Einstellungen ausführen müssen.

Klicken Sie dazu im Bereich *Workflow bearbeiten* mit der rechten
Maustaste auf *Individuelle Ausführung*.

![](<img/image68.png>)

Wenn Sie im Workflow eine bestimmte Aktion nicht ausführen möchten,
entfernen Sie das Häkchen bei der jeweiligen Aktion. Klicken Sie
anschließend auf *Ausführen* um die Aktion(en) durchzuführen.

![](<img/image69.png>)

## Workflows importieren

Der Menüpunkt *Workflows importieren* erlaubt Ihnen
*Profile* aus dem alten RZL PDF-Drucker als Workflow zu importieren.
Hierbei werden die existierenden Profile aufgelistet und Sie können jene
auswählen, die umgewandelt werden sollen. Des Weiteren können Sie auch
zuvor exportiere Workflows wieder importieren. Geben dazu den Pfad zur
XML-Datei an.

![](<img/image70.png>)

Die Bereiche-Checkboxen sind erweiterte Einstellungen, um spezielle
Bereiche aus dem PDF-Profil zu importieren oder zu ignorieren.

## Workflow-Übersicht

In dieser Ansicht sind alle persönlichen und Kanzleiweiten Workflows
unabhängig der Zuständigkeit aufgelistet und dient der Übersicht. Im
Menü des PDF-Managers werden nur folgende Workflows angezeigt:
**Persönliche, Kanzleiweite und Workflows für die Sie „zuständig“
sind.** Falls Ihnen ein Workflow nicht angezeigt wird können Sie ihn in
der Übersicht finden (dann fehlt Ihnen die Zuständigkeit).

![](<img/image71.png>)

Sie haben drei Funktionen zu Auswahl. Bearbeiten **(1)**, Ausführen
**(2)** und Löschen **(3)**.

Des Weiteren können Sie im unteren Bereich gelöschte Workflows
wiederherstellen **(4)** oder diese endgültig zu löschen **(5)**. Danach
ist **keine** Wiederherstellung möglich. Kanzleiweite Workflows
werden nur der Benutzergruppe **KIS-Administrator** dargestellt und
können somit nur von dieser wiederhergestellt werden.