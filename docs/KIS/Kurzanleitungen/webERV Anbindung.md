Ab 01.01.2026 ist FinanzOnline nicht mehr als Kommunikationsweg für die Einreichung von Jahresabschlüssen beim Firmenbuchgericht zulässig. Jahresabschlüsse und Anhänge, die in der neuen Struktur Jab 4.0 erstellt wurden, können somit nicht mehr über Finanzonline eingereicht werden, sondern ausschließlich über JustizOnline oder direkt beim Firmenbuchgericht über den elektronischen Rechtsverkehr (ERV).

Unterlagen, die in einer früheren Strukturversion erstellt wurden, müssen bis zum 31.12.2025 über Finanzonline übermittelt werden.

Im RZL Bilanzierungsprogramm können Sie die Einreichungen mithilfe des webERV-Service von MANZ weiterhin sicher, effizient und fristgerecht durchführen.
Weitere Informationen bezüglich dieser Änderung im Zusammenhang mit dem RZL Bilanzprogramm inklusive der technischen Voraussetzungen und notwendige Einstellungen zur Verwendung der MANZ-Schnittstelle für die Übermittlung finden Sie in der [Kurzanleitung **Jahresabschlüsse Firmenbuch ERV-Jab 4.0**](https://rzlsoftware.at/fileadmin/user_upload/PDF_Kurzanleitungen/BIL/BIL_Firmenbuchabgabe_4-0.pdf)

Mit der webERV-Anbindung können Nachrichten aus dem elektronischen Rechtsverkehr (ERV) in das RZL Kanzlei-Informations-System übernommen werden, das betrifft unter anderem Firmenbuchbeschlüsse und sonstige ERV Zustellungen. Über Zuweisungen können Thema, Kategorie und Dokumentenbereich definiert werden, welche eine strukturierte Ablage unterstützen. Darüber hinaus können Aufgabenvorlagen für eine automatische Aufgabenerstellung definiert und hinterlegt werden.

Voraussetzung für die Nutzung der webERV-Anbindung an die RZL Programme ist das RZL Bilanz-Programm und das Modul RZL KIS Dokumentenverwaltung bzw. das Modul RZL Dokumentenverwaltung-/Belegverwaltung plus. Außerdem muss der RZL Dienst installiert werden, welcher **kostenfrei** zur Verfügung steht.

## webERV Einstellungen im RZL Board

Um die webERV Anbindung im KIS nutzen zu können, müssen die erforderlichen Einstellungen unter *Portale* → Register *webERV → Einstellungen* vorgenommen werden.

![Einstellungen Board](<img/Einstellungen Board.png>)

Die Nachrichten werden zwar grundsätzlich den entsprechenden Klienten zugeordnet, allerdings ist es für die Aktivierung der Übernahme von webERV Dokumente zwingend notwendig einen Fallback-Klienten zu hinterlegen. Es besteht außerdem die Möglichkeit, verschiedene Fallback-Klienten für separate Anschriftencodes (=Teilnehmercode laut Bilanz-Programm) zu hinterlegen.

!!! info "Hinweis"
    Der Fallback-Klient kann individuell gewählt werden. Sie können dafür beispielsweise den Kanzleiklienten oder einen speziell für betriebsinterne Angelegenheiten angelegten Klienten verwenden.
    
    WARUM wird ein Fallback-Klient benötigt?
    
    Ein Dokument ohne Klientenzuordnung kann von jedem Mitarbeiter eingesehen werden, welcher in seiner Rolle die Berechtigung "Dokument anzeigen" besitzt. Somit wird die Sichtbarkeit eingehender ERV-Dokumente mit einem hinterlegten Fallback-Klienten gewährleistet.

    Für das Bilanz-Programm ist die Hinterlegung eines Fallback-Klienten nicht erforderlich!

Die nachträgliche Übernahme kann erst aktiviert werden, sobald ein Fallback-Klient hinterlegt wird. Tragen Sie das gewünschte Datum ein, mit welchem die Dokumente aus dem webERV übernommen werden sollen. Beim Klick auf **Aktivieren** werden die Dokumente in das Kanzlei-Informations-System übernommen.


## webERV Zuweisungen im RZL Kanzlei-Informations-System

Für eine strukturierte Ablage der webERV Dokumente können Sie unter *Verwaltung → Zuweisungen → webERV* jeweils Thema, Kategorie und Dokumentbereich für ERV Firmenbuchbeschlüsse und sonstige ERV Nachrichten festlegen.
Außerdem können Sie unter *Verwaltung → Aufgabenvorlagen* Aufgabenvorlagen anlegen, mit welchen Aufgaben für die ERV Firmenbuchbeschlüsse/sonstige ERV Zustellungen erstellt werden.

![Zuweisungen webERV](<img/Zuweisungen.png>)