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
        $this->assertEquals([], []);
    }

    public function test_with_string ()
    {
        $this->assertEquals("a", "a");
    }

    public function test_with_string_in_array ()
    {
        $this->assertEquals(["1", 2], ["1",2]);
    }

    public function test_with_array ()
    {
        $this->assertEquals([[1,2], 3], [[1,2],3]);
    }
}