## Scanordner

Der Scanordner wird für einen oder mehrere Mitarbeiter festgelegt. Dieser kann mit einem Namen und einer Anmerkung versehen werden. Weiters wird der Speicherpfad des Laufwerkes gewählt, wo die Belege abgespeichert werden.

![Scanordner](<img/image10.png>)

- **Name:**  
Sie können hier einen Namen für jeden Scanordner vergeben,
der dann im Bereich *Belege hinzufügen / Belege Scanordner*
angezeigt wird.


- **Ordner für Mitarbeiter:**  
  Scanordner können Sie einem
  oder mehreren Mitarbeitern zuordnen, somit sieht nur der ausgewählte Mitarbeiter seinen hinterlegten öffentlichen (kanzleiweiten) Scanordner.

- **Anmerkung:**  
Notiz zu diesem Scanordner.

- **Ordnerpfad:**  
Im Ordnerpfad wird der am Laufwerk angelegte
    Scanordner hinterlegt.

- **Dokumente / Belege importieren:**  
Je nach Aktivierung steht
    dieser Scanordner in der RZL KIS-Dokumentenverwaltung bzw. in der
    RZL Board Belegverarbeitung zur Verfügung.

- **Texterkennung (OCR) automatisch im Hintergrund ausführen:**  
Diese Option steht nur dann zur Verfügung, wenn in den Einstellungen zur
    Texterkennung n*ur bei ausgewählten Scanordnern* ausgewählt wurde.
    Grundsätzlich wird empfohlen, Texterkennung im Hintergrund generell
    zu aktivieren. Somit wird die Texterkennung (OCR-Erkennung)
    vollautomatisch im Hintergrund ausgeführt, sobald neue Belege in
    einem Scanordner vorhanden sind und das RZL Board gestartet ist.

- **Belege für schnelleren Zugriff lokal kopieren:**  
Bei Aktivierung
    dieser Option werden die Belege für die Bearbeitung lokal
    zwischengespeichert und die Zugriffe auf den Scan-Ordner auf ein
    Minimum reduziert. Diese Einstellung ist bei einer langsamen oder
    instabilen Verbindung zum Scan-Ordner zu empfehlen.
    
- **Belege automatisch zuordnen**
Im gewählten Scanordner kann der Klient sowie der Belegkreis vordefiniert werden.

## Belegschablone

Die bisher angelegten Belegschablonen werden in einer Liste angezeigt.
Schablonen können hier gelöscht oder auch umbenannt werden. Weiters werden noch Informationen, wie das Erstellungsdatum, der Ersteller und die letzte Änderung der Schablone angezeigt.
Schablonen können einfach über die oben angeführten Funktionen importiert sowie exportiert werden.

## Texterkennung (OCR)

## Stempel

In diesem Menü können diverse Stempel für die Belege konfiguriert werden.

### Buchungsstempel

Der Buchungsstempel kann hierbei vollkommen eigenhändig gestaltet werden. Dabei kann die *Schriftart*, die *Schriftgröße* und die *Schriftfarbe* geändert werden.
Die angeführten Informationen unterhalb des Bildes, können hierbei ausgewählt werden. Die Informationen werden dann automatisch aus dem Buchungssatz, bei welchem der Beleg anhängt ausgefüllt. Weiters kann man bei der Erstellung des Stempels, mittels einer Vorschau, sich ein besser Bild machen.

![Stempel](<img/image1.png>)

-   **Dateiname:** Name, unter welcher die Datei gespeichert ist

-   **Klient:** Nummer und Name des Klienten

-   **Belegkreis:** zB ER, AR, KA, …

-   **Belegart:** Eingangsbeleg, Ausgangsbeleg …

-   **Belegnummer:** fortlaufende Nummer

-   **Fremdbelegnummer:** Rechnungsnummer des Beleges

-   **Belegdatum:** Datum des Beleges

-   **Gesamtbetrag:** Bruttobetrag

-   **Buchungssatz:** Soll/Haben

-   **Gebucht von:** Name des Erfassers

-   **Gebucht am:** Datum der Erfassung

-   **Buchungstext:** erfasster Text beim Buchen

-   **Kommentar:** Vermerk der beim Beleg erfasst wird

-   **Importdatum:** wann der Import stattgefunden hat

-   **Importiert von:** von dem der Import durchgeführt wurde

-   **Belegeingangsdatum:** Buchungsdatum

-   **Bezahlt am:** Datum der durchgeführten Zahlung

-   **Quelle:** ect. …

- **Steuercodes:** gebuchter Steuercode

### Freigabestempel/Kommentarstempel

Bei dem Freigabe- und Kommentarstempel kann nur die Schriftart, die Schriftgröße und die Farbe konfiguriert werden.

### Stempelposition

In diesem Konfigurator kann die Position des ungebuchten und gebuchten Stempels bestimmt werden.

![Stempelposition](<img/image2.png>)



## Grundeinstellungen

In den Grundeinstellungen lassen sich Registerpunkte aus- oder einblenden, Funktionen ein- oder ausschalten und weitere benutzerdefinierte Optionen festlegen.

![Grundeinstellungen](<img/image3.png>)

- **Belege hinzufügen:** Mit dieser Option können Belege mittels Drag&Drop, direkt eingefügt werden. Hierzu wird kein Scanordner oder Verzeichnis benötigt.

-   **Klientenportal-Belege:** Mit dieser Option wird beim Öffnen eines
    Klienten in der Menüleiste angezeigt, wie viele Belege vom
    Klientenportal noch abzuholen sind.

-   **Finmatics Belege:** Mit dieser Option wird beim Öffnen eines
    Klienten in der Menüleiste angezeigt, wie viele Belege von Finmatics
    noch abzuholen sind.

-   **Name/Anschrift mit UID-Nummer über FinanzOnline auslesen:** Mit
    dieser Option wird bei einer Belegdatenerkennung der Name und die
    Anschrift des Rechnungsaussteller (bei Eingangsbelegen) bzw. des
    Rechnungsempfängers (bei Ausgangsbelegen) über die UID-Nummer bei
    FinanzOnline ausgelesen. Somit haben Sie später in der Liste der
    *ungebuchten Belege* eine bessere und schnellere Übersicht über die
    Belege.  
    Die einmal vorgekommenen UID-Nummern werden für eine gewisse Zeit
    zwischengespeichert, damit bei Lieferanten, die häufig vorkommen,
    nicht jedes Mal bei FinanzOnline abgefragt werden muss.

-   **GLN der Lieferanschrift als Kundennummer des Rechnungsempfängers
    auslesen:** dies ist eine spezielle Funktion beim Import von
    ebInterface XML-Rechnungen. Dies kann genutzt werden, um später in
    der FIBU auf Basis dieser GLN-Nummer Buchungsvorschläge zu
    generieren.

- **Scannordner / Verzeichnis in neuen Registerkarten öffnen:** Mit dieser Option kann der Scanordner / Verzeichnis in eine neue Registerkarte geöffnet werden. Hierbei kann die Registerkarte auf eine andere Postion gewechselt werden oder auf einen weiteren Bildschirm.

- **Belege nach Drag&Drop in Ansicht "Belege hinzufügen" aus Ursprungsordner löschen:** Mit dieser Option werden die Belege automatisch aus dem Ursprungsordner gelöscht, nachdem sie mittels Drag&Drop verschoben wurden.




