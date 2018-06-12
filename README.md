SnsShare
========

Social Networking Services Shere jQuery Plugin. ([WebSite](http://samejack.github.io/SnsShare/), [Demo](http://samejack.github.io/SnsShare/demo/))

## Sample Code

```javascript
<div class="container">
    <button class="share-to btn" data-sns="facebook">Facebook</button>
    <button class="share-to btn" data-sns="twitter">Twitter</button>
    <button class="share-to btn" data-sns="google+">Google+</button>
    <button class="share-to btn" data-sns="plurk">Plurk</button>
    <button class="share-to btn" data-sns="line">Line</button>
</div>

<!-- JavaScript -->
<script type="text/javascript" src="jquery.snsShare.js"></script>
<script type="text/javascript">
    $(document).ready( function () {
        $('.share-to').snsShare('Hello World!', 'https://samejack.github.io/SnsShare/');
    });
</script>
```

### License

Apache License Version 2.0
