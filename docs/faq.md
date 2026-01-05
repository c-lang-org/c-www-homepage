# FAQ

<div class="accordion-list">

<details>
  <summary>Is this site official?</summary>
  
  Yes indeed, it was greenlighted by unanimous consent after review of document [N3408](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3408.pdf) during the [72nd meeting of ISO/IEC JTC1/SC22/WG14](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3502.pdf).
</details>

<details>
  <summary>What is "lingua franca"?</summary>
  
  It is a language widely used for communication among people who do not share a native language. It serves as a bridge for understanding and can significantly shape cultural and linguistic landscapes. Examples of natural languages that have fulfilled this role include Latin in medieval Europe, Chinese in East Asia, or English in contemporary global communication. Similarly, in the realm of programming, C has inspired many other languages and is the most common target for [Foreign Function Interfaces](https://en.wikipedia.org/wiki/Foreign_function_interface), establishing it as a lingua franca in the world of software development.
</details>

<details>
  <summary>What is the correct C logo?</summary>
  
  <div class="anchor-no-color">
  
  Traditionally, the logo of the C language is uppercase letter 'C' in font *Helvetica* of weight *black*. Typically colored in shades of blue and grey, such as *[Hit Grey](https://color-register.org/color/hit-grey)*, *[Cadet Grey](https://en.wikipedia.org/wiki/Cadet_grey)*, or *[LightSteelBlue](https://encycolorpedia.com/b0c4de)*.
  
  The image you see on this website was based on SVG file [uploaded to Wikimedia](https://commons.wikimedia.org/w/index.php?title=File:The_C_Programming_Language_logo.svg&oldid=724717272) by [Cobaiahackers](https://commons.wikimedia.org/wiki/Special:Contributions/Cobaiahackers) on <time>2023-01-12</time>.
  
  </div>
</details>

<details>
  <summary>Is this FAQ not missing content?</summary>
  
  Yes and no.
  
  There already are great FAQ lists driven by the community (see [resources](/resources#more-faq)). The committee also has [Change and Clarification Requests](https://www.open-std.org/jtc1/sc22/wg14/www/projects#DRs) documents.
  
  This FAQ, rather than being a language reference, aims to answer simple questions that don't really fit anywhere else.
</details>

<details>
  <summary>Is C++ a superset of C?</summary>
  
  Not exactly; C++ is a **fork** of C.
  
  To be more precise, it forked around <span class="nobr">K&R C</span>, had C89, C90, and C95 merged almost fully, and truly began to diverge from "mainline" with C99 and <span class="nobr">C++98</span> onward. That being said, it was never a strict superset, as there has always been valid C code that would be invalid or behave differently in C++.
  
  <x-cmt>
    You can read the following for more information:
    <ul>
      <li><a href="https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3065.pdf">C xor C++ Programming</a> (WG14: N3065; WG21: P2735R0)</li>
      <li><a href="https://mcla.ug/blog/cpp-is-not-a-superset-of-c.html">C++ is not a superset of C</a></li>
      <li><a href="https://jorenar.com/blog/c-xor-cpp">C++ is a superset of only a subset of C</a></li>
      <li><a href="http://david.tribble.com/text/cdiffs.htm">Incompatibilities Between ISO C and ISO C++</a></li>
      <li><a href="https://en.wikipedia.org/wiki/Compatibility_of_C_and_C%2B%2B">Compatibility of C and C++ - Wikipedia</a></li>
      <li><a href="https://faehnri.ch/how-c-is-not-a-subset-of-cpp/">How C is not a subset of C++</a></li>
      <li><a href="https://stackoverflow.com/q/1201593/10247460">Where is C not a subset of C++? - Stack Overflow</a></li>
      <li><a href="https://stackoverflow.com/a/31505447/10247460">Does C++ contain the entire C language? - Stack Overflow</a></li>
      <li><a href="https://isocpp.org/files/papers/N4860.pdf#section.C.5">N4860 (draft of C++20); Annex C (Compatibility), §C.5 (C++ and ISO C)</a></li>
      <li><a href="https://youtu.be/s3Cv0-U5bXc">C++ is NOT a superset of C: tentative definitions, implicit conversions, implicit declarations &more</a></li>
      <li><a href="https://www.stroustrup.com/3rd_compat.pdf">The C++ Programming Language, Special Edition; Appendix B - Compatibility</a></li>
      <li><a href="https://github.com/mono/mono/issues/10085">mono/mono#10085 - C/C++ incompatibilities</a></li>
    </ul>
  </x-cmt>
</details>

<details>
  <summary>What is C18?</summary>
  
  "C18" is a misnomer caused by the late publication of the C17 making the name of ISO publication *ISO/IEC 9899:20**18***.
  
  Similarly, ISO/IEC 9899:2024 should be referred to as "C23".
</details>

<details>
  <summary>Shouldn't C95 be "C94"?</summary>
  
  There are even documents referring to it as "C93", but it seems like the community settled on "C95".
</details>

<details>
  <summary>What is the naming schema for C versions?</summary>
  
  As per the multiple agreements during committee meetings, as well as discussions on mailing list, the names of each revision are not directly derived from the name of the ISO document specifying them, nor from the year it was published, nor even necessarily from the year the work on them was finalized.
  
  That being said, the names do follow the **convention** of "C" followed by last two digits of a year the document was sent for pre-publication review(s).
</details>

</div>
