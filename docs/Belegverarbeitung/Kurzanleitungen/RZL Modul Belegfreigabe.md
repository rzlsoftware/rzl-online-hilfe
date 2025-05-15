# RZL Modul Belegfreigabe

## RZL Modul Belegfreigabe

Als Erweiterung zum RZL FIBU/EA Modul Belegverarbeitung bietet RZL die Möglichkeit, mit dem Zusatzmodul „RZL Belegfreigabe“ die Rechnungsprüfung bzw. Buchungsfreigabe von Belegen digital in einem Workflow abzuwickeln. Sie können beim Hinzufügen von Belegen definieren, welche Stufen es für die Freigabe gibt und welche Mitarbeiter die Belege pro Stufe prüfen und freigeben müssen, damit die Belege in der RZL FIBU / EA gebucht werden können.


### 1. Belegfreigabe beim Klient aktivieren

Grundsätzlich ändert sich mit Lizenzierung dieses Moduls in den verschiedenen Ansichten der Belegverarbeitung nichts. Erst wenn Sie die Belegfreigabe 
bei einem Klienten aktivieren, werden die entsprechenden Ansichten aktiv.

Zum Aktivieren öffnen Sie den Klienten links oben im Feld *Klient wählen*. Wechseln Sie dann im Klienten in den Bereich *STAMM*. Dort können Sie unter 
*Belegverarbeitung / Allgemeines* nun die Belegfreigabe aktivieren **①**.
Voraussetzung dafür ist die Berechtigung *BELEGE / STAMM / Belegvearbeitung / Verwalten.*


![Image](<img/image-32.png>)


### 2. Geänderte Ansichten für Belegfreigabe

#### 2.1. Menüpunkt *BELEGE / Belege* ohne geöffnetem Klienten

![Image](<img/image-33.png>)


- Die Ansicht der Ungebuchten Belege ① zeigt die ungebuchten Belege aller Klienten ohne aktivierter Belegfreigabe.
- Die Ansicht Belegfreigabe **②** zeigt alle freizugebenden bzw. freigegebenen Belege und somit die ungebuchten Belege aller Klienten mit aktivierter Belegfreigabe.
- Zusätzlich gibt es eine Ansicht für Abgelehnte Belege **③**.


#### 2.2. Menüpunkt *BELEGE / Belege* mit geöffnetem Klienten

![Image](<img/image-34.png>)


- Bei Klienten mit aktivierter Belegfreigabe wird die Ansicht der Ungebuchten Belege ersetzt durch die Ansicht Belegfreigabe **①**. 
- Zusätzlich gibt es eine Ansicht für Abgelehnte Belege **②**.


#### 2.3. Menüpunkt *BELEGE / Einstellungen*

![Image](<img/image-35.png>)

Im Menüpunkt Einstellungen / Belegfreigabe **①** können Grundeinstellungen für das Modul Belegfreigabe vorgenommen werden.


### 3. Einstellungen Belegfreigabe

![Image](<img/image-36.png>)

#### 3.1. Freigabe-Standards anlegen

In den Einstellungen der Belegfreigabe können Sie mit der Berechtigung *BELEGE / Einstellungen / Grundeinstellungen / Belegfreigabe / OCR / Stempel / Finmatics verwalten* sogenannte *Freigabe-Standards* anlegen. Der Vorteil eines Freigabe-Standards liegt darin, dass Sie die Freigabestufen sowie die Mitarbeiter, die bestimmte Belege freigeben müssen, vorab bereits festlegen können. Beim Hinzufügen von Belegen müssen Sie die Freigabestufen nicht manuell anlegen und benennen bzw. die Mitarbeiter nicht manuell zuordnen, sondern können einen beliebigen, vorher definierten, Freigabe-Standard anwenden.

Zum Anlegen eines Freigabe-Standards klicken Sie in der Menüleiste auf *Neuer Freigabe-Standard* **①** :

![Image](<img/image-37.png>)


Sie können in diesem Bereich beliebig viele *Freigabe-Standards* anlegen.

Mit der Schaltfläche *Freigabe-Standard löschen* **②** kann ein gespeicherter Freigabe-Standard jederzeit wieder gelöscht werden. Zusätzlich können Sie bestehende Freigabe-Standards auch duplizieren und dann anpassen.


Sie können nun einen *Namen* **①** vergeben und im Feld *Anmerkung* **②** eine Notiz zu diesem Freigabe-Standard hinterlegen. Um unteren Bereich können Sie *Freigabestufen hinzufügen* **③**, um die Freigabe in einem **Workflow** in einer gewissen Reihenfolge festzulegen. Die Freigabestufen können nun mit Doppelklick oder mit dem Bleistiftsymbol im jeweiligen Registerblatt benannt werden **④**. 

Im Bereich *Freigabe durch* **⑤** können Sie den bzw. die gewünschten Mitarbeiter pro Freigabestufe hinterlegen.

Grundsätzlich können Sie beim Zuordnen von Freigebern mit ODER bzw. UND Verknüpfungen arbeiten. Das heißt, Sie können z.B. entscheiden ob Mitarbeiter 1 oder Mitarbeiter 2 bzw. Mitarbeiter 1 und Mitarbeiter 2 freigeben müssen. Oder-Freigaben werden in derselben Zeile festgelegt, Und-Freigaben in einer neuen Zeile.

Zum Hinzufügen von Oder-Freigebern in derselben Zeile steht immer schon ein freies Feld zur Verfügung. Zum Hinzufügen eines Und-Freigebers klicken Sie auf die Schaltfläche Freigeber hinzufügen **⑥**, um eine neue Zeile einzufügen.


![Image](<img/image-38.png>){width="800"}


**Beispiel:** Belege, denen obiger Freigabe-Standard zugeordnet wird, müssen zuerst in der Stufe Formelle Prüfung, dann in der Stufe Inhaltliche Prüfung und zuletzt in der Stufe Geschäftsführung (in dieser Stufe von Stein Stefan **oder** Weber Martin **und** von Huberlehner Maria) freigegeben werden.


Mit dem *Papierkorb-Symbol* können Freigabestufen sowie einzelne Freigeber wieder gelöscht werden. Um alle Freigeber zu löschen verwenden Sie ganz rechts die Schaltfläche *Alle Freigeber löschen*.

!!! warning "Hinweis"
    Freigabe-Standards sind grundsätzlich klientenübergreifend und können somit bei jedem Klienten verwendet werden! Wir empfehlen daher, die Standards aussagekräftig zu benennen, um eine richtige Zuordnung zu erleichtern.

#### 3.2. Automatische Zuordnung von Freigabe-Standards

In den Stammdaten eines Freigabe-Standards können Sie im Registerblatt *Automatische Zuordnung* festlegen, aufgrund welcher Kriterien ein Freigabe-Standard bei einer Belegdatenerkennung automatisch bei bestimmten Belegen angewandt werden soll.

In folgendem Beispiel wird der Freigabe-Standard *Rechnungen über 1.000* bei allen Belegen über EUR 1.000,00 mit dem Belegkreis ER bei den Klienten 3 und 4 automatisch angewandt.

![Image](<img/image-39.png>){width="800"}


Feldbeschreibung:

1. Und/Oder **①**: Mit diesem Feld können Sie festlegen, ob die folgenden Kriterien in dieser Gruppe alle zutreffen müssen (und) oder nur eines der Kriterien zutreffen muss (oder).
   
2. Bedingung hinzufügen **②**: Fügen Sie innerhalb der jeweiligen Gruppe eine neue Bedingung hinzu.
   
3. Gruppe hinzufügen **③**: Fügen Sie eine Ebene tiefer eine Gruppe mit Bedingungen hinzu.
   
4. Kriterien **④**: Mit folgenden Kriterien kann eine automatische Zuordnung angestoßen werden:


![Image](<img/image-40.png>)

5. Zeile löschen **⑤**: Mit dem Papierkorb Symbol kann eine Zeile oder eine Gruppe gelöscht werden.
6. In der Liste **⑥** wird gruppiert angezeigt, ob Kriterien für eine automatische Zuordnung hinterlegt sind.
7. Zusätzlich gibt es die Möglichkeit, die Freigabe-Standards mit dem Feld Reihenfolge 7 zu reihen. Falls bei einem Beleg mehrere passen würden, wird zuerst der vorgereihte Freigabe-Standard verwendet.


#### 3.3. Freigabe-Vertretung anlegen

Im Bereich *Freigabe-Vertretung* können Sie mit Administratorrechten Vertretungen für abwesende Freigeber festlegen. 


![Image](<img/image-41.png>)


In diesem Beispiel ist Maier Jonas im Juni für eine Woche auf Urlaub und wird in dieser Zeit von Weber Martin vertreten. Der Vorteil ist, dass bestehende Freigabe-Standards bzw. bereits zugeordnete Freigeber nicht abgeändert werden müssen, sondern im Hintergrund der Freigeber für den festgelegten Zeitraum ersetzt wird.

Nach Ende des gesetzten Zeitraumes wird in der Liste *Belegfreigabe* automatisch wieder der Original-Freigeber angezeigt.

Mit der Schaltfläche *Freigabe-Vertretung löschen* kann eine gespeicherte Freigabe-Vertretung jederzeit gelöscht werden.


#### 3.4. Freigabe-Benachrichtigung

Im Bereich Freigabe-Benachrichtigung können Sie pro Mitarbeiter festlegen, in welchen Fällen bestimmte Mitarbeiter benachrichtigt werden sollen. Folgende Möglichkeiten zur Benachrichtigung gibt es:


![Image](<img/image-42.png>)


**Benachrichtigungs-Möglichkeiten**

- *Neue Belege*

    Mitarbeiter mit dieser Option werden informiert, wenn neue Belege zum Freigeben hinzugefügt wurden. Hinweis: Bei Nutzung einer mehrstufigen Belegfreigabe bekommen Freigeber der 2. Stufe die Mails erst dann, wenn alle Freigeber der 1. Stufe freigegeben haben

- *Erinnerung senden*
  
    Mitarbeiter mit dieser Option werden nach einer gewissen Zeit informiert, wenn Belege nicht freigegeben wurden. Im Feld *Zeitlicher Abstand der Erinnerung in Tagen* kann eingestellt werden, nach wie vielen Tagen die Erinnerung-Mail versendet werden soll.

- *Abgelehnte Belege*
  
    Mitarbeiter mit dieser Option werden informiert, wenn Belege von beliebigen Freigebern abgelehnt wurden.


**Allgemeine Einstellungen für die Freigabe-Benachrichtigung**

- *Mail nicht verwenden, wenn Oder-Freigeber bereits freigegeben hat*

    Falls in einer Stufe mehrere Oder-Freigeber hinterlegt sind, bekommt grundsätzlich nach Freigabe eines Freigebers der andere Oder-Freigeber trotzdem ein Mail – er könnte ja den Beleg z.B. ablehnen. Mit dieser Option wird das Mail dann nicht mehr versendet.


- *Zeitliche Verzögerung der Benachrichtigung in Minuten*
  
    Legen Sie fest, wie viele Minuten nach dem Zuordnen von Freigebern zu einem Beleg gewartet werden soll, bis das Info-Mail an die Freigeber versandt wird. Somit wird sichergestellt, dass auch einzeln übernommene Belege in einem Mail zusammengefasst werden und nicht für jeden Beleg ein eigenes E-Mail 
versendet wird.

- *Zeitlicher Abstand der Erinnerung in Tagen*
  
    Falls ein Freigeber nach diesen eingestellten Tagen noch nicht freigegeben hat, wird ein Erinnerungsmail versendet.

- *Mailversand über Standard E-Mail Programm oder Klientenportal*
  
    *Standard E-Mail Programm:* Die E-Mails werden vom persönlichen E-Mail-Postfach jenes Benutzers versendet, der die Belege in die Belegverarbeitung übernommen hat.

    *Klientenportal:* Die Freigabe-Mails werden vom RZL Klientenportal versendet (kein lokales Mailprogramm notwendig). Dazu muss entweder ein lientenportal Service-User, ein fremder Klientenportal-Zugang oder ein Klientenportal Plugin eingerichtet sein.


### 4. Belege hinzufügen und Freigabestufen/Freigeber zuordnen

#### 4.1. Freigabe-Standards bei neuen Belegen verwenden

Beim Hinzufügen von Belegen, z.B. über einen Scanordner oder das RZL Klientenportal können Sie nun diese Freigabe-Standards anwenden.

Wenn Kriterien für eine *automatische Zuordnung* in den Stammdaten eines Freigabe-Standards hinterlegt sind, werden diese im Zuge einer Belegdatenerkennung automatisch den entsprechenden Belegen zugeordnet.

Andernfalls müssen die Freigabe-Standards manuell zugeordnet werden. Markieren Sie dazu die gewünschten Belege und ordnen Sie den gewünschten Freigabe-Standard zu. Dazu haben Sie zwei Möglichkeiten:

*Menüleiste:* Mit einem Klick auf die Funktion Freigabe-Standards können Sie den gewünschten Freigabe-Standard den markierten Belegen zuordnen.


![Image](<img/image-43.png>)


*Detailansicht Freigabe:* Wechseln Sie im Bereich *Detailansicht* in das Registerblatt *Freigabe* **①**. Hier können Sie für die aktuell markierten Belege die Freigebestufen und Freigeber lt. definiertem *Freigabe-Standard* **②** hinterlegen.

!!! warning "Hinweis"
    Ein Freigabe-Standard dient „nur“ der einfachen Zuordnung von Freigabestufen und Mitarbeitern. Es wird nicht gespeichert, welcher Freigabe-Standard bei einem Beleg angewendet wurde.


![Image](<img/image-44.png>)


Nach dem Zuordnen der Freigabe-Standards **②** werden die Freigabestufen und zugeordneten Mitarbeiter im Detail im Bereich *Freigabe* **①** bzw. in der Listenansicht in der Spalte *Freigeber* **③** angezeigt. In der Listenansicht werden Stufen mit einem vertikalen Strich, Und-Freigeber mit einem Beistrich sowie Oder-Freigeber mit einem Schrägstrich getrennt, angezeigt.


#### 4.2. Freigabestufen und Freigeber bei neuen Belegen manuell zuordnen

Falls Sie *Freigabe-Standards* verwendet haben, können Sie nun jederzeit bei einzelnen Belegen Änderungen zu den bereits zugeordneten Stufen / Freigebern vornehmen (Stufen hinzufügen / löschen, Freigeber löschen, andere Freigeber hinzufügen usw.).

Bei neuen Belegen können Stufen und Freigeber manuell einzelnen Belegen zugeordnet werden. Eine manuelle Zuordnung bei mehreren Belegen gleichzeitig ist nicht möglich – verwenden Sie dafür einen vorher definierten *Freigabe-Standard*.


### 5. Ansicht Belegfreigabe

#### 5.1. Neue Spalten bzw. neues Registerblatt im Detail

Zum Freigeben von Belegen öffnen Sie nun die Ansicht *Belegfreigabe*.


![Image](<img/image-45.png>)


Hier werden nun in vier Spalten die aktuellen Freigabeinformationen angezeigt:

1. Freigabestatus **①**
   a. Nicht freigegeben (kein Symbol)
   b. Teilweise freigegeben
   c. Freigegeben 
   d. Abgelehnt (diese Belege werden in einer eigenen Liste angezeigt)

2. Freigeber **②**: die zugeordneten Freigeber werden angezeigt. Oder-Freigeber mit Schrägstrich, Und-Freigeber mit Beistrich getrennt. Freigabestufen werden mit einem vertikalen Strich unterteilt.
   
3. Freigabe-Fortschritt **③**: In dieser Spalte wird grafisch dargestellt, wie viele Freigabestufen schon erledigt sind – diese werden grün dargestellt. In grauer Farbe werden die noch nicht erledigten Freigabestufen angezeigt. Somit kann in dieser Spalte der Gesamtfortschritt der Belegfreigabe abgelesen werden.

4. Aktuelle Freigabestufe **④**: Die Stufe, in der sich der Beleg gerade befindet, wird textuell angezeigt.

Ganz unten in der Detailansicht eines Beleges im Registerblatt Freigabe werden die zugeordneten Freigeber und weitere Informationen, wie z.B. das Datum und die Uhrzeit einer erfolgten Freigabe, angezeigt.


#### 5.2. Mögliche Aktionen

Folgende Aktionen können bei einem Beleg nun getätigt werden, wenn Sie als Freigeber zugeordnet sind:

- Freigeben (optional mit Anmerkung)

- Ablehnen

- Weiterleiten

- Zurücksetzen

Grundsätzlich gibt es drei verschiedene Möglichkeiten, eine Freigabe-Aktionen zu setzen:


![Image](<img/image-46.png>)


![Image](<img/image-47.png>)


![Image](<img/image-48.png>)


##### 5.2.1. Beleg freigeben

Beim Freigeben eines Beleges wird gespeichert, welcher Mitarbeiter zu welchem Datum und zu welcher Uhrzeit den Beleg freigegeben hat. Zusätzlich kann jeder Freigeber eine Anmerkung erfassen.

Wenn alle notwendigen Freigabestufen und Freigeber freigegeben haben, erhält der Beleg automatisch den Status *freigegeben*. Jetzt kann dieser Beleg in der FIBU / EA gebucht werden.


##### 5.2.2. Beleg ablehnen

Falls ein Beleg nicht akzeptiert wird, kann ein zugeordneter Freigeber einen Beleg *ablehnen*. Zusätzlich kann ein Ablehnungsgrund erfasst werden (dieser wird auch im E-Mail angeführt).


![Image](<img/image-49.png>)


Der Beleg wird nach einer Ablehnung von der Liste *Belegfreigabe* in die Liste der *Abgelehnte Belege* verschoben (Details dazu weiter unten).

Wenn mehrere Freigeber zugeordnet sind reicht die Ablehnung eines Mitarbeiters, damit der Beleg in die Liste der abgelehnten Belege verschoben wird.

Optional kann nun ein Infomail an bestimmte Mitarbeiter versendet werden (siehe Einstellungen weiter oben).


##### 5.2.3. Beleg weiterleiten

Falls Sie als zugeordneter Freigeber diesen Beleg einem anderen Mitarbeiter zum Freigeben übergeben möchten, verwenden Sie die Aktion *Weiterleiten*.

Beim Weiterleiten wählen Sie den gewünschten Mitarbeiter und erfassen optional einen Weiterleitungsgrund bzw. eine Nachricht für den neuen Freigeber (wird auch im E-Mail angeführt).


![Image](<img/image-50.png>)


Beim ursprünglichen Freigeber wird vermerkt, an wen, zu welchem Datum und zu welcher Uhrzeit der Beleg weitergeleitet wurde. Der neue Freigeber ist als Oder-Freigeber in derselben Stufe hinterlegt. Solange der neue Freigeber keine Aktion getätigt hat, können Sie die Aktion zurücknehmen oder den Beleg auch selbst noch freigeben.

In der Detailansicht zum entsprechenden Beleg finden Sie die entsprechenden Informationen:


![Image](<img/image-51.png>)


##### 5.2.4. Zurücksetzen

Mit der Funktion *Zurücksetzen* können Sie bereits getätigte Aktionen wieder zurücknehmen. Es wird dies ebenfalls mit Datum und Uhrzeit vermerkt. Der Beleg gilt von Ihnen nun wieder als *nicht freigeben*.


![Image](<img/image-52.png>)


#### 5.3. Weitere Funktionen


![Image](<img/image-53.png>)


##### 5.3.1. Meine freizugebenden Beleg

Um in der Liste aller Belege nur die Belege zu sehen, bei denen Sie als Freigeber zugeordnet sind, aktivieren Sie die Schaltfläche *Meine freizugebenden Belege*. Es wird somit ein Filter auf die Spalte Freigeber mit Ihrem Kürzel gesetzt. Ein erneutes Klicken dieser Schaltfläche deaktiviert diesen Filter wieder.


##### 5.3.2. Freigeber bearbeiten

Mit dieser Funktion können Sie in der Detailansicht im Registerblatt *Freigabe* die zugeordneten Mitarbeiter verändern (nur solange dieser noch keine Freigabe durchgeführt hat). Diese Funktion kann nur von dem Mitarbeiter ausgeführt werden, der die Belege ursprünglich hinzugefügt hat oder von einem RZL Administrator.


##### 5.3.3. Seiten bearbeiten

Jeder Freigeber kann über die Funktion *Seiten bearbeiten* Seiten zum bestehenden Beleg dazu hängen. Ziehen Sie die neue Seite oder die neuen Seiten z.B. aus dem Windows-Explorer oder aus einem Scanordner in diese Ansicht *Seiten bearbeiten*.


#### 5.4. Sichtbarkeitsrechte einschränken (Nur Belegfreigeber)

Im Berechtigungssystem gibt es die Möglichkeit, einem Mitarbeiter z.B. nur die Rolle Belegfreigeber zuzuordnen. Somit können diese Mitarbeiter in der *RZL Belegverarbeitung* (Ansichten *Belegfreigabe* und *Gebuchte Belege*) nur Belege sehen, bei denen sie selbst als Belegfreigeber zugeordnet sind.

Somit sieht ein Belegfreigeber nie Belege von anderen Mitarbeitern. Diese Einstellung empfehlen wir für alle Mitarbeiter, die in den RZL Programmen nur Belege freigeben!

![Image](<img/image-54.png>)


### 6. Ansicht Abgelehnte Belege

Falls Belege von einem Freigeber abgelehnt wurden, werden diese in der Ansicht *Abgelehnte Belege* angezeigt.


![Image](<img/image-55.png>)


Ein abgelehnter Beleg kann mit der Funktion Beleg löschen **①** entweder zur Gänze gelöscht und somit in den Belege Papierkorb verschoben werden oder mit der Funktion Ablehnung zurücknehmen ②wieder in die Liste derBelegfreigabe zurückgeschoben werden. Die abgelehnten Belege können in dieser Liste auch einfach stehen bleiben.


### 7. Ansicht Gebuchte Belege

Belege, die den Status *Freigegeben* erreicht haben, können in der RZL FIBU / EA gebucht werden.

Auch nach dem Buchen bleibt die Freigabeinformation erhalten und ist jederzeit aufrufbar.


![Image](<img/image-56.png>)

