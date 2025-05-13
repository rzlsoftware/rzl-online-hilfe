# RZL Modul Belegfreigabe

## RZL Modul Belegfreigabe

Als Erweiterung zum RZL FIBU/EA Modul Belegverarbeitung bietet RZL die Möglichkeit, mit dem Zusatzmodul „RZL Belegfreigabe“ die Rechnungsprüfung bzw. Buchungsfreigabe von Belegen digital in einem Workflow abzuwickeln. Sie können beim Hinzufügen von Belegen definieren, welche Stufen es für die Freigabe gibt und welche Mitarbeiter die Belege pro Stufe prüfen und freigeben müssen, damit die Belege in der RZL FIBU / EA gebucht werden können.


### 1. Belegfreigabe beim Klient aktivieren

Grundsätzlich ändert sich mit Lizenzierung dieses Moduls in den verschiedenen Ansichten der Belegverarbeitung nichts. Erst wenn Sie die Belegfreigabe 
bei einem Klienten aktivieren, werden die entsprechenden Ansichten aktiv.

Zum Aktivieren öffnen Sie den Klienten links oben im Feld *Klient wählen*. Wechseln Sie dann im Klienten in den Bereich *STAMM*. Dort können Sie unter 
*Belegverarbeitung / Allgemeines* nun die Belegfreigabe aktivieren ①.
Voraussetzung dafür ist die Berechtigung *BELEGE / STAMM / Belegvearbeitung / Verwalten.*


![Image](<img/image-32.png>)


### 2. Geänderte Ansichten für Belegfreigabe

#### 2.1. Menüpunkt *BELEGE / Belege* ohne geöffnetem Klienten

![Image](<img/image-33.png>)


- Die Ansicht der Ungebuchten Belege ① zeigt die ungebuchten Belege aller Klienten ohne aktivierter Belegfreigabe.
- Die Ansicht Belegfreigabe ② zeigt alle freizugebenden bzw. freigegebenen Belege und somit die ungebuchten Belege aller Klienten mit aktivierter Belegfreigabe.
- Zusätzlich gibt es eine Ansicht für Abgelehnte Belege ③.


#### 2.2. Menüpunkt *BELEGE / Belege* mit geöffnetem Klienten

![Image](<img/image-34.png>)


- Bei Klienten mit aktivierter Belegfreigabe wird die Ansicht der Ungebuchten Belege ersetzt durch die Ansicht Belegfreigabe ①. 
- Zusätzlich gibt es eine Ansicht für Abgelehnte Belege ②.


#### 2.3. Menüpunkt *BELEGE / Einstellungen*

![Image](<img/image-35.png>)

Im Menüpunkt Einstellungen / Belegfreigabe ① können Grundeinstellungen für das Modul Belegfreigabe vorgenommen werden.


### 3. Einstellungen Belegfreigabe

![Image](<img/image-36.png>)

#### 3.1. Freigabe-Standards anlegen

In den Einstellungen der Belegfreigabe können Sie mit der Berechtigung *BELEGE / Einstellungen / Grundeinstellungen / Belegfreigabe / OCR / Stempel / Finmatics verwalten* sogenannte *Freigabe-Standards* anlegen. Der Vorteil eines Freigabe-Standards liegt darin, dass Sie die Freigabestufen sowie die Mitarbeiter, die bestimmte Belege freigeben müssen, vorab bereits festlegen können. Beim Hinzufügen von Belegen müssen Sie die Freigabestufen nicht manuell anlegen und benennen bzw. die Mitarbeiter nicht manuell zuordnen, sondern können einen beliebigen, vorher definierten, Freigabe-Standard anwenden.

Zum Anlegen eines Freigabe-Standards klicken Sie in der Menüleiste auf *Neuer Freigabe-Standard* ①:

![Image](<img/image-37.png>)


Sie können in diesem Bereich beliebig viele *Freigabe-Standards* anlegen.

Mit der Schaltfläche *Freigabe-Standard löschen* ② kann ein gespeicherter Freigabe-Standard jederzeit wieder gelöscht werden. Zusätzlich können Sie bestehende Freigabe-Standards auch duplizieren und dann anpassen.


Sie können nun einen *Namen* ① vergeben und im Feld *Anmerkung* ② eine Notiz zu diesem Freigabe-Standard hinterlegen. Um unteren Bereich können Sie *Freigabestufen hinzufügen* ③, um die Freigabe in einem **Workflow** in einer gewissen Reihenfolge festzulegen. Die Freigabestufen können nun mit Doppelklick oder mit dem Bleistiftsymbol im jeweiligen Registerblatt benannt werden ④. 

Im Bereich *Freigabe durch* ⑤ können Sie den bzw. die gewünschten Mitarbeiter pro Freigabestufe hinterlegen.

Grundsätzlich können Sie beim Zuordnen von Freigebern mit ODER bzw. UND Verknüpfungen arbeiten. Das heißt, Sie können z.B. entscheiden ob Mitarbeiter 1 oder Mitarbeiter 2 bzw. Mitarbeiter 1 und Mitarbeiter 2 freigeben müssen. Oder-Freigaben werden in derselben Zeile festgelegt, Und-Freigaben in einer neuen Zeile.

Zum Hinzufügen von Oder-Freigebern in derselben Zeile steht immer schon ein freies Feld zur Verfügung. Zum Hinzufügen eines Und-Freigebers klicken Sie auf die Schaltfläche Freigeber hinzufügen ⑥, um eine neue Zeile einzufügen.


![Image](<img/image-38.png>)


**Beispiel:** Belege, denen obiger Freigabe-Standard zugeordnet wird, müssen zuerst in der Stufe Formelle Prüfung, dann in der Stufe Inhaltliche Prüfung und zuletzt in der Stufe Geschäftsführung (in dieser Stufe von Stein Stefan **oder** Weber Martin **und** von Huberlehner Maria) freigegeben werden.


Mit dem *Papierkorb-Symbol* können Freigabestufen sowie einzelne Freigeber wieder gelöscht werden. Um alle Freigeber zu löschen verwenden Sie ganz rechts die Schaltfläche *Alle Freigeber löschen*.


!!! warning "Hinweis"
Freigabe-Standards sind grundsätzlich klientenübergreifend und können somit bei jedem Klienten verwendet werden! Wir empfehlen daher, die Standards aussagekräftig zu benennen, um eine richtige Zuordnung zu erleichtern.


#### 3.2. Automatische Zuordnung von Freigabe-Standards

In den Stammdaten eines Freigabe-Standards können Sie im Registerblatt *Automatische Zuordnung* festlegen, aufgrund welcher Kriterien ein Freigabe-Standard bei einer Belegdatenerkennung automatisch bei bestimmten Belegen angewandt werden soll.

In folgendem Beispiel wird der Freigabe-Standard *Rechnungen über 1.000* bei allen Belegen über EUR 1.000,00 mit dem Belegkreis ER bei den Klienten 3 und 4 automatisch angewandt.

![Image](<img/image-39.png>)


Feldbeschreibung:
1. Und/Oder ①: Mit diesem Feld können Sie festlegen, ob die folgenden Kriterien in dieser Gruppe alle zutreffen müssen (und) oder nur eines der Kriterien zutreffen muss (oder).
2. Bedingung hinzufügen ②: Fügen Sie innerhalb der jeweiligen Gruppe eine neue Bedingung hinzu.
3. Gruppe hinzufügen ③: Fügen Sie eine Ebene tiefer eine Gruppe mit Bedingungen hinzu.
4. Kriterien ④: Mit folgenden Kriterien kann eine automatische Zuordnung angestoßen werden:


![Image](<img/image-40.png>)

5. Zeile löschen ⑤: Mit dem Papierkorb Symbol kann eine Zeile oder eine Gruppe gelöscht werden.
6. In der Liste ⑥ wird gruppiert angezeigt, ob Kriterien für eine automatische Zuordnung hinterlegt sind.
7. Zusätzlich gibt es die Möglichkeit, die Freigabe-Standards mit dem Feld Reihenfolge  zu reihen. Falls bei einem Beleg mehrere passen würden, wird zuerst der vorgereihte Freigabe-Standard verwendet.


#### 3.3. Freigabe-Vertretung anlegen

Im Bereich *Freigabe-Vertretung* können Sie mit Administratorrechten Vertretungen für abwesende Freigeber festlegen. 


![Image](<img/image-41.png>)


In diesem Beispiel ist Maier Jonas im Juni für eine Woche auf Urlaub und wird in dieser Zeit von Weber Martin vertreten. Der Vorteil ist, dass bestehende Freigabe-Standards bzw. bereits zugeordnete Freigeber nicht abgeändert werden müssen, sondern im Hintergrund der Freigeber für den festgelegten Zeitraum ersetzt wird.

Nach Ende des gesetzten Zeitraumes wird in der Liste *Belegfreigabe* automatisch wieder der Original-Freigeber angezeigt.

Mit der Schaltfläche *Freigabe-Vertretung löschen* kann eine gespeicherte Freigabe-Vertretung jederzeit gelöscht werden.


#### 3.4. Freigabe-Benachrichtigung aktivieren

Im Bereich Freigabe-Benachrichtigung können Sie pro Mitarbeiter festlegen, in welchen Fällen bestimmte Mitarbeiter benachrichtigt werden sollen. Folgende Möglichkeiten zur Benachrichtigung gibt es:


![Image](<img/image-42.png>)


##### 3.4.1. Benachrichtigungs-Möglichkeiten

- *Neue Belege*

    Mitarbeiter mit dieser Option werden informiert, wenn neue Belege zum Freigeben hinzugefügt wurden. Hinweis: Bei Nutzung einer mehrstufigen Belegfreigabe bekommen Freigeber der 2. Stufe die Mails erst dann, wenn alle Freigeber der 1. Stufe freigegeben haben

- *Erinnerung senden*
  
    Mitarbeiter mit dieser Option werden nach einer gewissen Zeit informiert, wenn Belege nicht freigegeben wurden. Im Feld *Zeitlicher Abstand der Erinnerung in Tagen* kann eingestellt werden, nach wie vielen Tagen die Erinnerung-Mail versendet werden soll.

- *Abgelehnte Belege*
  
    Mitarbeiter mit dieser Option werden informiert, wenn Belege von beliebigen Freigebern abgelehnt wurden.


##### 3.4.2. Allgemeine Einstellungen für die Freigabe-Benachrichtigung

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


