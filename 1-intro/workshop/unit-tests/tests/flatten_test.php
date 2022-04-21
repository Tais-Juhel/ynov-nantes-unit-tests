<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    public function test_something()
    {
        $this->assertEquals(1337, 1337);
    }

    public function test_with_null ()
    {
        $this->assertEquals(flatten([]), []);
    }

    public function test_with_string ()
    {
        $this->assertEquals(flatten(["a"]), ["a"]);
    }

    public function test_with_int ()
    {
        $this->assertEquals(flatten([1]), [1]);
    }

    public function test_with_array ()
    {
        $this->assertEquals(flatten([[1, 2], 3]), [1,2,3]);
    }
}