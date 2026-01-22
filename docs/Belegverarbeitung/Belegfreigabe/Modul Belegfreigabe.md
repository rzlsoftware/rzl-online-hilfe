# Modul Belegfreigabe

Als Erweiterung zum RZL FIBU/EA Modul Belegverarbeitung bietet RZL die Möglichkeit, mit dem Zusatzmodul „RZL Belegfreigabe“ die Rechnungsprüfung bzw. Buchungsfreigabe von Belegen digital in einem Workflow abzuwickeln. Sie können beim Hinzufügen von Belegen definieren, welche Stufen es für die Freigabe gibt und welche Mitarbeiter die Belege pro Stufe prüfen und freigeben müssen, damit die Belege in der RZL FIBU / EA gebucht werden können.

## Belegfreigabe beim Klient aktivieren

Grundsätzlich ändert sich mit Lizenzierung dieses Moduls in den verschiedenen Ansichten der Belegverarbeitung nichts. Erst wenn Sie die Belegfreigabe bei einem Klienten aktivieren, werden die entsprechenden Ansichten aktiv.

Zum Aktivieren öffnen Sie den Klienten links oben im Feld Klient wählen. Wechseln Sie dann im Klienten in den Bereich **STAMM**. Dort können Sie unter *Belegverarbeitung / Allgemeines* nun die **Belegfreigabe aktivieren ①**. 

![Aktivieren](<img/image.png>)

Voraussetzung dafür ist die **Berechtigung** *BELEGE / STAMM / Belegvearbeitung / Verwalten*.

## Geänderte Anischten für Belegfreigabe

Nach Aktivierung beim Klienten erscheinen im Bereich *BELEGE* nun die benötigten Ansichten. Je nachdem ob der Klient bereits geöffnet ist oder nicht, stehen folgende Ansichten zur Verfügung:

### Menüpunkt BELEGE / Belege **ohne** geöffnetem Klienten

![ohne Klient](<img/image1.png>)

- Die Ansicht der **Ungebuchten Belege ①** zeigt die ungebuchten Belege aller Klienten **ohne** aktivierter Belegfreigabe.
- Die Ansicht **Belegfreigabe ②** zeigt alle freizugebenden bzw. freigegebenen Belege und somit die ungebuchten Belege aller Klienten **mit** aktivierter Belegfreigabe
- Zusätzlich gibt es eine Ansicht für **Abgelehnte Belege ③**.

### Menüpunkt BELEGE / Belege **mit** geöffnetem Klienten

![mit Klient](<img/image2.png>)

- Bei Klienten mit aktivierter Belegfreigabe wird die Ansicht der Ungebuchten Belege ersetzt durch die Ansicht **Belegfreigabe ①**.
- Zusätzlich gibt es eine Ansicht für **Abgelehnte Belege ②**.

### Menüpunkt BELEGE / Einstellungen

![Einstellungen](<img/image3.png>)

Im Menüpunkt *Einstellungen / Belegfreigabe* können Grundeinstellungen für das Modul **Belegfreigabe** vorgenommen werden.

## Einstellungen Belegfreigabe

![Einstellungen2](<img/image4.png>)

### Freigabe-Standards anlegen

In den Einstellungen der Belegfreigabe können Sie mit der Berechtigung *BELEGE / Einstellungen / Grundeinstellungen / Belegfreigabe / OCR/Stempel / Finmatics* verwalten sogenannte *Freigabe-Standards* anlegen. Der Vorteil eines Freigabe-Standards liegt darin, dass Sie die Freigabestufen sowie die Mitarbeiter, die bestimmte Belege freigeben müssen, vorab festlegen können. Beim Hinzufügen von Belegen müssen Sie die Freigabestufen nicht manuell anlegen und benennen bzw. die Mitarbeiter nicht manuell zuordnen, sondern können einen beliebigen, vorher definierten, Freigabe-Standard anwenden.

Zum Anlegen eines Freigabe-Standards klicken Sie in der Menüleiste auf **Neuer Freigabe-Standard ①**:

![Freiabe-Standards](<img/image5.png>)

Sie können in diesem Bereich beliebig viele Freigabe-Standards anlegen.
Mit der Schaltfläche **Freigabe-Standard löschen ②** kann ein gespeicherter Freigabe-Standard jederzeit wieder gelöscht werden. Zusätzlich können Sie bestehende **Freigabe-Standards duplizieren ③** und dann anpassen.

Sie können nun einen **Namen ①** vergeben und im Feld **Anmerkung ②** eine Notiz zu diesem Freigabe-Standard hinterlegen. Im unteren Bereich können Sie **Freigabestufen hinzufügen ③**, um die Freigabe in einem **Workflow** in einer gewissen Reihenfolge festzulegen.
Die Freigabestufen können mit Doppelklick oder mit dem Bleistiftsymbol im jeweiligen Registerblatt benannt werden **④**.

Im Bereich **Freigabe durch ⑤** können Sie den bzw. die gewünschten Mitarbeiter pro Freigabestufe hinterlegen.

Grundsätzlich können Sie beim Zuordnen von Freigebern mit ODER bzw. UND Verknüpfungen arbeiten. Das heißt, Sie können zum Beispiel entscheiden ob Mitarbeiter **1 oder** Mitarbeiter 2 bzw. Mitarbeiter 1 **und** Mitarbeiter 2 freigeben müssen. Oder-Freigaben werden in derselben Zeile festgelegt, Und-Freigaben in einer neuen Zeile.

Zum Hinzufügen von Oder-Freigebern in derselben Zeile steht immer schon ein freies Feld zur Verfügung. Zum Hinzufügen eines Und-Freigebers klicken Sie auf die Schaltfläche **Freigeber hinzufügen ⑥**, um eine neue Zeile einzufügen.

![Freigabe-Standard2.0](<img/image6.png>)

**Beispiel**: Belege, denen obiger Freigabe-Standard zugeordnet wird, müssen zuerst in der Stufe „Formelle Prüfung“, dann in der Stufe „Inhaltliche Prüfung“ und zuletzt in der Stufe „Geschäftsführung“ (in dieser Stufe von Stein Stefan **oder** Weber Martin **und** von Huberlehner Maria) freigegeben werden.

Mit dem **Papierkorb-Symbol** können Freigabestufen sowie einzelne Freigeber wieder gelöscht werden. Um alle Freigeber zu löschen, verwenden Sie ganz rechts die Schaltfläche **Alle Freigeber löschen**.

!!! warning "Hinweis"
    Freigabe-Standards sind grundsätzlich **klientenübergreifend** und können somit bei jedem Klienten verwendet werden! Wir empfehlen daher, die Standards aussagekräftig zu benennen, um eine richtige Zuordnung zu erleichtern.

### Automatische Zuordnung von Freigabe-Standards

In den Stammdaten eines Freigabe-Standards können Sie im Registerblatt **Automatische Zuordnung** festlegen, aufgrund welcher Kriterien ein Freigabe-Standard bei einer Belegdatenerkennung automatisch bei bestimmten Belegen angewandt werden soll.

In folgendem Beispiel wird der Freigabe-Standard **Rechnungen über 1000** bei allen Belegen über EUR 1.000,00 mit dem Belegkreis ER bei den Klienten 3 und 4 automatisch angewandt.

![Automatische Zuordnung](<img/image7.png>)

**Feldbeschreibung:**

- **Und/Oder ①**: Mit diesem Feld können Sie festlegen, ob die folgenden Kriterien in dieser Gruppe alle zutreffen müssen (und) oder nur eines der Kriterien zutreffen muss (oder).
- **Bedingung hinzufügen ②**: Fügen Sie innerhalb der jeweiligen Gruppe eine neue Bedingung hinzu.
- **Gruppe hinzufügen ③**: Fügen Sie eine Ebene tiefer eine Gruppe mit Bedingungen hinzu.
- **Kriterien ④**: Mit folgenden Kriterien kann eine automatische Zuordnung angestoßen werden:

![Drop-Down](<img/image8.png>)

- **Zeile löschen ⑤**: Mit dem Papierkorb Symbol kann eine Zeile oder eine Gruppe gelöscht werden.
- In der **Liste ⑥** wird gruppiert angezeigt, ob Kriterien für eine automatische Zuordnung hinterlegt sind.
- Zusätzlich gibt es die Möglichkeit, die Freigabe-Standards mit dem Feld **Reihenfolge** zu reihen. Falls bei einem Beleg mehrere passen würden, wird zuerst der vorgereihte Freigabe-Standard verwendet.

### Freigabe-Vertretung ablegen

Im Bereich **Freigabe-Vertretung** können Sie mit Administratorrechten Vertretungen für abwesende Freigeber festlegen. 

![Vertretung](<img/image9.png>)

In diesem Beispiel ist Maier Jonas im Juni für eine Woche auf Urlaub und wird in dieser Zeit von Weber Martin vertreten. Der Vorteil ist, dass bestehende Freigabe-Standards bzw. bereits zugeordnete Freigeber nicht abgeändert werden müssen, sondern im Hintergrund der Freigeber für den festgelegten Zeitraum ersetzt wird.

Nach Ende des gesetzten Zeitraumes wird in der Liste **Belegfreigabe** automatisch wieder der Original-Freigeber angezeigt.

Mit der Schaltfläche **Freigabe-Vertretung** löschen kann eine gespeicherte Freigabe-Vertretung jederzeit gelöscht werden.

### Freigabe-Benachrichtigung aktivieren

Im Bereich **Freigabe-Benachrichtigung** können Sie pro Mitarbeiter festlegen, in welchen Fällen bestimmte Mitarbeiter benachrichtigt werden sollen. Folgende Möglichkeiten zur Benachrichtigung gibt es:

![Benachrichtigung](<img/image10.png>)

#### Benachrichtigungs-Möglichkeiten

- **Neue Belege:**
Mitarbeiter mit dieser Option werden informiert, wenn neue Belege zum Freigeben hinzugefügt wurden.

!!! warning "Hinweis"
    Bei Nutzung einer mehrstufigen Belegfreigabe bekommen Freigeber der 2. Stufe die Mails erst dann, wenn alle Freigeber der 1. Stufe freigegeben haben.

- **Erinnerung senden:**
Mitarbeiter mit dieser Option werden nach einer gewissen Zeit informiert, wenn Belege nicht freigegeben wurden. Im Feld *Zeitlicher Abstand der Erinnerung in Tagen* kann eingestellt werden, nach wie vielen Tagen die Erinnerungsmail versendet werden soll.

- **Abgelehnte Belege:**
Mitarbeiter mit dieser Option werden informiert, wenn Belege von beliebigen Freigebern abgelehnt wurden.

#### Allgemeine Einstellungen für die Freigabe-Benachrichtigung

- **Mail nicht versenden, wenn Oder-Freigeber bereits freigegeben hat:**
Falls in einer Stufe mehrere Oder-Freigeber hinterlegt sind, bekommt grundsätzlich nach Freigabe eines Freigebers der andere Oder-Freigeber trotzdem ein Mail – er könnte ja den Beleg z.B. ablehnen. Mit dieser Option wird das Mail dann nicht mehr versandt.

- **Zeitliche Verzögerung der Benachrichtigung in Minuten:**
Legen Sie fest, wie viele Minuten nach dem Zuordnen von Freigebern zu einem Beleg gewartet werden soll, bis das Info-Mail an die Freigeber versandt wird. Somit wird sichergestellt, dass auch einzeln übernommene Belege in einem Mail zusammengefasst werden und nicht für jeden Beleg ein eigenes E-Mail versendet wird.

- **Zeitlicher Abstand der Erinnerung in Tagen**
Falls ein Freigeber nach diesen eingestellten Tagen noch nicht freigegeben hat, wird ein Erinnerungsmail versendet.

- **Mailversand über Microsoft Azure, Standard E-Mail Programm oder Klientenportal**

**Microsoft Azure**: Diese Einstellung ist als Standardeinstellung hinterlegt, wenn der RZL Dienst eingerichtet ist. Es wird ein automatisch generiertes Mail von RZL mittels Azure Maildienst versendet.

**Standard E-Mail Programm**: Die E-Mails, dass neue Belege zur Freigabe zur Verfügung stehen, werden vom persönlichen E-Mail-Postfach jenes Benutzers versendet, der die Belege in die Belegverarbeitung übernommen hat. Das Erinnerungsmail, dass Belege seit einigen Tagen auf die Freigabe warten, wird von einem zufällig ausgewählten, aktiven Outlook-Postfach versandt.

**Klientenportal**: Die Freigabe-Mails werden vom RZL Klientenportal versendet (kein lokales Mailprogramm notwendig). Dazu muss entweder ein Klientenportal Service-User, ein fremder Klientenportal-Zugang oder ein Klientenportal Plugin eingerichtet sein.

### Freigabe-Einstellungen

Wird ein Beleg im Freigabeprozess abgelehnt, kann ein **Kommentar mit dem Ablehnungsgrund** erfasst werden. Mit Aktivieren der Option **Kommentar bei Ablehnung verpflichtend** in den **Freigabe-Einstellungen** **"muss"** bei jeder Ablehnung ein Kommentar erfasst werden.

![Freigabe Einstellungen](<img/image11.png>)

## Belege hinzufügen und Freigabestufen/Freigber zuordnen
### Freigabe-Standards bei neuen Belegen verwenden

Beim Hinzufügen von Belegen, z.B. über einen Scanordner oder das RZL Klientenportal, können Sie nun die angelegten Freigabe-Standards anwenden. 

Wenn Kriterien für eine **automatische Zuordnung** in den Stammdaten eines Freigabe-Standards hinterlegt sind, werden diese im Zuge einer Belegdatenerkennung automatisch den entsprechenden Belegen zugeordnet.

Andernfalls müssen die Freigabe-Standards manuell zugeordnet werden. Markieren Sie dazu die gewünschten Belege und ordnen Sie den gewünschten Freigabe-Standard zu. Dazu haben Sie zwei Möglichkeiten:

- **Menüleiste**: Mit einem Klick auf die Funktion Freigabe-Standards können Sie den gewünschten Freigabe-Standard **den markierten Belegen zuordnen**.

![Freigabe-Standards neu](<img/image12.png>)

- **Detailansicht Freigabe**: Wechseln Sie im Bereich **Detailansicht** in das Registerblatt **Freigabe ①**. Hier können Sie für die aktuell markierten Belege die Freigabestufen und Freigeber lt. definiertem **Freigabe-Standard ②** hinterlegen.

![Freigabe bei Scanordner](<img/image13.png>)

!!! warning "Hinweis"
    Ein Freigabe-Standard dient „nur“ der einfachen Zuordnung von Freigabestufen und Mitarbeitern. Es wird nicht gespeichert, welcher Freigabe-Standard bei einem Beleg angewendet wurde.

Nach dem Zuordnen der **Freigabe-Standards ②** werden die Freigabestufen und zugeordneten Mitarbeiter im Detail im Bereich **Freigabe ①** bzw. in der Listenansicht in der Spalte **Freigeber ③** angezeigt. In der Listenansicht werden Stufen mit einem vertikalen Strich, Und-Freigeber mit einem Beistrich sowie Oder-Freigeber mit einem Schrägstrich getrennt, angezeigt.

### Freigabestufen und Freigeber bei neuen Belegen manuell zuordnen

Falls Sie **Freigabe-Standards** verwendet haben, können Sie nun jederzeit bei einzelnen Belegen Änderungen zu den bereits zugeordneten Stufen/Freigebern vornehmen (Stufen hinzufügen/löschen, Freigeber löschen, andere Freigeber hinzufügen usw.).

Bei neuen Belegen können Stufen und Freigeber manuell einzelnen Belegen zugeordnet werden. Eine manuelle Zuordnung bei mehreren Belegen gleichzeitig ist nicht möglich – verwenden Sie dafür einen vorher definierten **Freigabe-Standard**.

## Ansicht Belegfreigabe
### Neue Spalten bzw. neues Registerblatt im Detail
Zum Freigeben von Belegen öffnen Sie nun die Ansicht **Belegfreigabe**.

![Ansicht](<img/image14.png>)

Hier werden nun in vier Spalten die aktuellen Freigabeinformationen angezeigt:

**Freigabestatus ①**

- nicht freigegeben (kein Symbol)
- Teilweise freigegeben (gelbes Häkchen)
- Freigegeben (grünes Häkchen)
- Abgelehnt (diese Belege werden in einer eigenen Liste angezeigt)

**Freigeber ②:** die zugeordneten Freigeber werden angezeigt. Oder-Freigeber mit Schrägstrich, Und-Freigeber mit Beistrich getrennt. Freigabestufen werden mit einem vertikalen Strich unterteilt.

**Freigabe-Fortschritt ③:** In dieser Spalte wird grafisch dargestellt, wie viele Freigabestufen schon erledigt sind – diese werden grün dargestellt. In grauer Farbe werden die noch nicht erledigten Freigabestufen angezeigt. Somit kann in dieser Spalte der Gesamtfortschritt der Belegfreigabe abgelesen werden.

**Aktuelle Freigabestufe ④:** Die Stufe, in der sich der Beleg gerade befindet, wird textuell angezeigt.

Ganz unten in der **Detailansicht** eines Beleges im Registerblatt **Freigabe** werden die zugeordneten Freigeber und weitere Informationen, wie z.B. das Datum und die Uhrzeit einer **erfolgten** Freigabe, angezeigt.

### Mögliche Aktionen

Folgende Aktionen können bei einem Beleg getätigt werden, wenn Sie als Freigeber zugeordnet sind:

- Freigeben (optional mit Anmerkung)
- Ablehnen
- Weiterleiten
- Zurücksetzen

Grundsätzlich gibt es drei verschiedene Möglichkeiten, eine Freigabe-Aktionen zu setzen:

**Menüleiste**
![Menüleiste](<img/image15.png>)

**Detailansicht**
![Detailansicht](<img/image16.png>)

**Belegansicht**
![Belegansicht](<img/image17.png>)

#### Beleg freigeben

Beim Freigeben eines Beleges wird gespeichert, welcher Mitarbeiter zu welchem Datum und zu welcher Uhrzeit den Beleg freigegeben hat. Zusätzlich kann jeder Freigeber eine Anmerkung erfassen.

Wenn alle notwendigen Freigabestufen und Freigeber freigegeben haben, erhält der Beleg automatisch den Status **freigegeben**. Jetzt kann dieser Beleg in der FIBU / EA gebucht werden.

#### Beleg ablehnen

Falls ein Beleg nicht akzeptiert wird, kann ein zugeordneter Freigeber einen Beleg **ablehnen**. Zusätzlich kann ein Ablehnungsgrund erfasst werden (dieser wird auch im E-Mail angeführt).

![Beleg ablehnen](<img/image18.png>)

Der Beleg wird nach einer Ablehnung von der Liste **Belegfreigabe** in die Liste der **Abgelehnten Belege** verschoben (Details dazu weiter unten).

Wenn mehrere Freigeber zugeordnet sind reicht die Ablehnung eines Mitarbeiters, damit der Beleg in die Liste der abgelehnten Belege verschoben wird.

Optional kann nun eine Infomail an bestimmte Mitarbeiter versendet werden (siehe Einstellungen weiter oben).

#### Beleg weiterleiten

Falls Sie als zugeordneter Freigeber diesen Beleg einem anderen Mitarbeiter zum Freigeben übergeben möchten, verwenden Sie die Aktion **Weiterleiten**.

Beim Weiterleiten wählen Sie den gewünschten Mitarbeiter und erfassen optional einen Weiterleitungsgrund bzw. eine Nachricht für den neuen Freigeber.

![Beleg weiterleiten](<img/image19.png>)

Beim ursprünglichen Freigeber wird vermerkt, an wen, zu welchem Datum und zu welcher Uhrzeit der Beleg weitergeleitet wurde. Der neue Freigeber ist als Oder-Freigeber in derselben Stufe hinterlegt. Solange der neue Freigeber keine Aktion getätigt hat, können Sie die Aktion zurücknehmen oder den Beleg auch selbst noch freigeben.

In der Detailansicht zum Beleg finden Sie die entsprechenden Informationen:
![Detailansicht zum Beleg](<img/image20.png>)

#### Zurücksetzen

Mit der Funktion **Zurücksetzen** können Sie bereits getätigte Aktionen wieder zurücknehmen. Es wird dies ebenfalls mit Datum und Uhrzeit vermerkt. Der Beleg gilt von Ihnen nun wieder als **nicht freigegeben**.

![Zurücksetzen](<img/image21.png>)

## RZL Online Freigabe

Als alternative Möglichkeit zur Freigabe von Belegen steht Ihnen die Online Belegfreigabe im Modul „RZL Belegfreigabe“ zur Verfügung. Somit kann die Belegfreigabe auch außerhalb vom RZL Board durchgeführt werden.

Technische Voraussetzung ist die Installation des **RZL Dienstes** (siehe *RZL Dienst installieren im RZL Setup Handbuch*). Die Belegfreigabe funktioniert somit nur, wenn Sie Zugriff auf das Firmennetzwerk haben.

!!! warning "Hinweis"
    Die hinterlegten Belegfreigabe-Einstellungen müssen nicht angepasst werden.

### Aufrufen der Online Belegfreigabe

Sie haben zwei Möglichkeiten, die Online Belegfreigabe aufzurufen:

- über das **RZL Board**
- über das Benachrichtigungsmail, dass neue Belege für Sie zur Freigabe zur Verfügung stehen

#### Aufruf über das RZL Board

Im **RZL Board** im Menüpunkt *BELEGE / Belegfreigabe* können Sie die Online Belegfreigabe über den Menüpunkt **Freigabe mit RZL Dienst** aufrufen:

![Online Belegfreigabe](<img/image22.png>)

#### Aufruf über das Benachrichtigungsmail

Bereits im Benachrichtigungsmail können Sie mit Klick auf die Dateibezeichnung des Belegs **②** eine Vorschau des Belegs öffnen.

Mit Klick auf die Schaltfläche **Meine freizugebenden Belege ③** öffnet sich die Online Belegfreigabe.

![Benachrichtigungsmail](<img/image23.png>)

### Durchführen der Online Belegfreigabe

Nach Einstieg in die Online Belegfreigabe über einen der im vorigen Kapitel beschriebenen Wege, öffnet sich ein Fenster in Ihrem Standardbrowser, in dem alle Belege angezeigt werden, wo Ihre Freigabe erforderlich ist. In diesem Fenster können Sie die Belege noch einmal als **PDF-Vorschau aufrufen ①** oder alle aufgelisteten Belege mit einem Klick auf die Schaltfläche **Alle meine Belege freigeben ②** freigeben.

Die Freigabe kann auch pro Beleg erteilt werden. Sie können hier optional eine **Anmerkung ③** erfassen, die bei der ausgewählten Aktion mit übermittelt wird. Über die entsprechenden Schaltflächen kann der Beleg **freigegeben ④**, **abgelehnt ⑤**, oder an den im Drop-Down ausgewählten Mitarbeiter weitergeleitet werden.

![Durchführen Online BF](<img/image24.png>)
## Weiter Funktionen

![Weitere Funktionen](<img/image24.png>)
### Meine Belege filtern

Um in der Liste aller Belege nur die Belege zu sehen, bei denen Sie als Freigeber zugeordnet sind, aktivieren Sie die Schaltfläche **Meine Belege filtern ①**. Es wird somit ein Filter auf die Spalte Freigeber mit Ihrem Kürzel gesetzt. Ein erneutes Klicken dieser Schaltfläche deaktiviert diesen Filter wieder.

### Freigeber bearbeiten

Mit der Funktion **Freigeber bearbeiten ②** können Sie in der Detailansicht im Registerblatt **Freigabe** die zugeordneten Mitarbeiter verändern (nur solange dieser noch keine Freigabe durchgeführt hat). Diese Funktion kann nur von dem Mitarbeiter ausgeführt werden, der die Belege ursprünglich hinzugefügt hat oder von einem RZL Administrator. Durch erneuten Klick auf die Schaltfläche, wird das Bearbeiten der Freigeber beendet.

### Erinnerung senden

Über die Schaltfläche **Erinnerung senden ③** kann das Versenden eines Erinnerungsmails an alle Freigeber mit noch nicht freigegebenen Belegen versandt werden. Optional kann das Erinnerungsmail auch nur an die Freigeber ausgewählter Belege versandt werden.

### Seiten bearbeiten

Jeder Freigeber kann über die Funktion **Seiten bearbeiten ④**, Seiten zum bestehenden Beleg dazu hängen. Ziehen Sie die neue Seite oder die neuen Seiten z.B. aus dem Windows-Explorer oder aus einem Scanordner in diese Ansicht **Seiten bearbeiten**.

## Sichtbarkeitsrechte einschränken (Nur Belegfreigeber)

Im Berechtigungssystem gibt es die Möglichkeit, einem Mitarbeiter z.B. nur die Rolle **Belegfreigeber** zuzuordnen. Somit können diese Mitarbeiter in der **RZL Belegverarbeitung** (Ansichten **Belegfreigabe** und **Gebuchte Belege**) nur Belege sehen, bei denen sie selbst als Belegfreigeber zugeordnet sind.

Somit sieht ein Belegfreigeber nie Belege von anderen Mitarbeitern. Diese Einstellung empfehlen wir für alle Mitarbeiter, die in den RZL Programmen nur Belege freigeben!

![Sichtbarkeitsrechte](<img/image26.png>)

## Anischt Abgelehnte Belege
Falls Belege von einem Freigeber abgelehnt wurden, werden diese in der Ansicht **Abgelehnte Belege** angezeigt.

![Ansicht abgelehnte Belege](<img/image27.png>)

Ein abgelehnter Beleg kann mit der Funktion **Beleg löschen ①** zur Gänze gelöscht und somit in den **Belege Papierkorb** verschoben werden. Mit der Funktion **Ablehnung zurücknehmen ②** wird der Beleg wieder in die Liste der Belegfreigabe, mit der Funktion **Beleg in Scanordner zurücksetzen ③** wieder in den Scanordner für eine erneute Zuweisung verschoben. Die abgelehnten Belege können in dieser Liste auch einfach stehen bleiben.

## Ansicht Gebuchte Belege

Belege, die den Status **Freigegeben** erreicht haben, können in der RZL FIBU / EA gebucht werden.

Auch nach dem Buchen bleibt die Freigabeinformation erhalten und ist jederzeit in der Detailansicht im Register **Freigegeben von** aufrufbar.

![Ansicht Gebuchte Belege](<img/image28.png>)